import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useFormField } from "@/components/ui/form";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import {
  DEFAULT_PHONE_ISO,
  getOrderedPhoneCountries,
  matchDialFromE164,
  type PhoneCountry,
} from "@/lib/phoneCountries";
import Flags from "country-flag-icons/react/3x2";

function FlagIcon({ iso }: { iso: string }) {
  const Flag = Flags[iso as keyof typeof Flags];
  if (!Flag) return <span className="text-xs">{iso}</span>;
  return <Flag className="h-4 w-6 shrink-0 rounded-sm" />;
}

function normalizeSpaces(s: string): string {
  return s.trim().replace(/\s+/g, " ");
}

export type PhoneInputWithCountryProps = {
  value: string;
  onChange: (full: string) => void;
  onBlur?: () => void;
  disabled?: boolean;
  className?: string;
  inputClassName?: string;
  inputTestId?: string;
  id?: string;
};

export function PhoneInputWithCountry({
  value,
  onChange,
  onBlur,
  disabled,
  className,
  inputClassName,
  inputTestId,
  id,
}: PhoneInputWithCountryProps) {
  const { formItemId, error, formDescriptionId, formMessageId } = useFormField();
  const inputId = id ?? formItemId;
  const inputAriaInvalid = error ? true : undefined;
  const inputAriaDescribedBy = !error
    ? `${formDescriptionId}`
    : `${formDescriptionId} ${formMessageId}`;

  const { priority, others } = React.useMemo(() => getOrderedPhoneCountries(), []);
  const [pickerIso, setPickerIso] = React.useState(DEFAULT_PHONE_ISO);
  const [menuOpen, setMenuOpen] = React.useState(false);

  const trimmed = value.trim();
  const e164Match = trimmed.startsWith("+") ? matchDialFromE164(trimmed) : null;
  const activeIso = e164Match?.country.iso ?? pickerIso;

  React.useEffect(() => {
    if (trimmed.startsWith("+")) {
      const m = matchDialFromE164(trimmed);
      if (m) setPickerIso(m.country.iso);
    }
  }, [trimmed]);

  function applyCountryPick(country: PhoneCountry) {
    setPickerIso(country.iso);
    const t = value.trim();
    if (!t) {
      onChange(`${country.dial} `);
      setMenuOpen(false);
      return;
    }
    if (t.startsWith("+")) {
      const m = matchDialFromE164(t);
      if (m) {
        const rest = t.slice(m.country.dial.length).replace(/^\s+/, "");
        onChange(rest ? normalizeSpaces(`${country.dial} ${rest}`) : `${country.dial} `);
      } else {
        const stripped = t.replace(/^\++/, "").replace(/^\s*/, "");
        onChange(normalizeSpaces(stripped ? `${country.dial} ${stripped}` : `${country.dial} `));
      }
      setMenuOpen(false);
      return;
    }
    onChange(normalizeSpaces(`${country.dial} ${t}`));
    setMenuOpen(false);
  }

  function row(c: PhoneCountry) {
    return (
      <button
        key={c.iso}
        type="button"
        onClick={() => applyCountryPick(c)}
        aria-label={`${c.name}, ${c.dial}`}
        className={cn(
          "flex w-full items-center gap-3 rounded-none px-2 py-2.5 text-left text-sm hover:bg-accent hover:text-accent-foreground",
          c.iso === activeIso && "bg-muted",
        )}
      >
        <span className="text-xl leading-none shrink-0" aria-hidden>
          <FlagIcon iso={c.iso} />
        </span>
        <span className="min-w-0 flex-1 truncate font-medium">{c.name}</span>
      </button>
    );
  }

  return (
    <div
      className={cn(
        "flex h-10 w-full items-stretch rounded-none border border-input bg-transparent shadow-sm transition-colors",
        "focus-within:ring-1 focus-within:ring-ring focus-within:ring-offset-2 ring-offset-background",
        error && "border-destructive focus-within:ring-destructive",
        className,
      )}
    >
        <Popover open={menuOpen} onOpenChange={setMenuOpen}>
          <PopoverTrigger asChild>
            <button
              type="button"
              disabled={disabled}
              className={cn(
                "flex min-w-[3.25rem] shrink-0 items-center justify-center gap-0.5 border-r border-input bg-muted/25 px-1.5 text-xl leading-none",
                "hover:bg-muted/45 disabled:pointer-events-none disabled:opacity-50",
                "rounded-none outline-none focus-visible:bg-muted/45",
              )}
              aria-label="Choose country"
              aria-haspopup="dialog"
            >
              <span aria-hidden className="select-none">
              <FlagIcon iso={activeIso} />
              </span>
              <ChevronDown className="h-3.5 w-3.5 shrink-0 text-muted-foreground" aria-hidden strokeWidth={2.5} />
            </button>
          </PopoverTrigger>
          <PopoverContent
            align="start"
            sideOffset={6}
            className="w-[min(92vw,320px)] max-h-72 overflow-y-auto rounded-none border-border p-0"
            onOpenAutoFocus={e => e.preventDefault()}
          >
            <div className="sticky top-0 z-10 flex items-center justify-between gap-2 border-b border-border bg-popover px-2 py-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              <span>Common countries</span>
              <ChevronDown className="h-3.5 w-3.5 shrink-0 opacity-70" aria-hidden strokeWidth={2.5} />
            </div>
            <div className="p-1">{priority.map(row)}</div>
            <div className="sticky top-0 z-10 flex items-center justify-between gap-2 border-y border-border bg-popover px-2 py-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              <span>Other countries</span>
              <ChevronDown className="h-3.5 w-3.5 shrink-0 opacity-70" aria-hidden strokeWidth={2.5} />
            </div>
            <div className="p-1 pb-2">{others.map(row)}</div>
          </PopoverContent>
        </Popover>
        <Input
          id={inputId}
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          disabled={disabled}
          placeholder="Phone number with country code"
          className={cn(
            "h-10 min-w-0 flex-1 rounded-none border-0 bg-transparent px-3 py-2 shadow-none",
            "focus-visible:ring-0 focus-visible:ring-offset-0",
            inputClassName,
          )}
          value={value}
          onChange={e => onChange(e.target.value)}
          onBlur={() => {
            if (value.trim()) onChange(normalizeSpaces(value));
            onBlur?.();
          }}
          data-testid={inputTestId}
          aria-describedby={inputAriaDescribedBy}
          aria-invalid={inputAriaInvalid}
        />
    </div>
  );
}
