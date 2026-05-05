import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useState } from "react";
import { ClipboardCheck, ShieldAlert } from "lucide-react";
import { Link } from "wouter";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { PhoneInputWithCountry } from "@/components/PhoneInputWithCountry";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

const assessmentSchema = z.object({
  firstName: z.string().min(2, { message: "First name is required." }),
  lastName: z.string().min(2, { message: "Last name is required." }),
  email: z.string().email({ message: "Valid email is required." }),
  phone: z
    .string()
    .min(1, { message: "Phone number is required." })
    .refine(s => s.trim().replace(/\D/g, "").length >= 8, {
      message: "Enter a valid number with at least 8 digits (country code may be separate).",
    }),
  nationality: z.string().min(2, { message: "Nationality is required." }),
  visaType: z.string().min(1, { message: "Please select a visa type." }),
  situation: z.string().min(20, { message: "Please provide a brief description (min 20 characters)." }),
  consent: z.boolean().refine(val => val === true, {
    message: "You must consent to us processing your data.",
  }),
});

export default function FreeAssessment() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<z.infer<typeof assessmentSchema>>({
    resolver: zodResolver(assessmentSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      nationality: "",
      visaType: "",
      situation: "",
      consent: false,
    },
  });

  function onSubmit(values: z.infer<typeof assessmentSchema>) {
    console.log(values);
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div className="flex flex-col min-h-screen bg-muted/30">
      {/* Header */}
      <section className="relative bg-primary text-primary-foreground py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-55" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1573496358961-3c82861ab8f4?auto=format&fit=crop&w=1920&q=80)" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/60 to-transparent" />
        <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-4xl">
          <h1 className="font-serif text-4xl md:text-5xl font-bold tracking-tight mb-4">Free Initial Assessment</h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl">
            Tell us about your situation. Our regulated advisers will review your details and provide an initial perspective on your options, free of charge.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          
          {isSubmitted ? (
            <div className="bg-card border border-border p-12 text-center shadow-sm animate-in fade-in slide-in-from-bottom-4" data-testid="assessment-success">
              <div className="mx-auto w-16 h-16 bg-secondary/20 text-secondary flex items-center justify-center rounded-full mb-6">
                <ClipboardCheck size={32} />
              </div>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Assessment Received</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto leading-relaxed">
                Thank you for submitting your details. Our advisers will review your situation and contact you via email within 48 working hours.
              </p>
              <Link href="/">
                <Button className="bg-primary text-primary-foreground font-serif rounded-none px-8">
                  Return to Homepage
                </Button>
              </Link>
            </div>
          ) : (
            <div className="bg-card border border-border p-6 md:p-10 shadow-sm">
              <div className="flex items-start gap-4 mb-8 p-4 bg-muted/50 border border-border">
                <ShieldAlert className="text-primary shrink-0 mt-1" size={20} />
                <p className="text-sm text-muted-foreground">
                  <strong>Confidentiality Notice:</strong> All information provided in this form is treated with strict confidence under professional legal privilege and GDPR requirements.
                </p>
              </div>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  
                  <div className="space-y-6">
                    <h3 className="font-serif text-xl font-bold border-b border-border pb-2">Personal Details</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>First Name</FormLabel>
                            <FormControl>
                              <Input placeholder="John" className="rounded-none border-border" {...field} data-testid="input-firstname" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Last Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Doe" className="rounded-none border-border" {...field} data-testid="input-lastname" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="john.doe@example.com" className="rounded-none border-border" {...field} data-testid="input-email" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <PhoneInputWithCountry
                              value={field.value}
                              onChange={field.onChange}
                              onBlur={field.onBlur}
                              inputTestId="input-phone"
                            />
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="nationality"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Current Nationality</FormLabel>
                            <FormControl>
                              <Input placeholder="e.g. Indian, Nigerian, Chinese" className="rounded-none border-border" {...field} data-testid="input-nationality" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="visaType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Visa Category of Interest</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="rounded-none border-border" data-testid="select-visa">
                                  <SelectValue placeholder="Select a category" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="skilled-worker">Skilled Worker</SelectItem>
                                <SelectItem value="student">Student Visa</SelectItem>
                                <SelectItem value="family">Family / Spouse Visa</SelectItem>
                                <SelectItem value="visitor">Standard Visitor</SelectItem>
                                <SelectItem value="ilr">Indefinite Leave to Remain</SelectItem>
                                <SelectItem value="citizenship">British Citizenship</SelectItem>
                                <SelectItem value="other">Other / Unsure</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h3 className="font-serif text-xl font-bold border-b border-border pb-2">Your Situation</h3>
                    <FormField
                      control={form.control}
                      name="situation"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Brief Description</FormLabel>
                          <FormDescription>
                            Please provide a summary of your current status, immigration history, and what you are trying to achieve.
                          </FormDescription>
                          <FormControl>
                            <Textarea 
                              placeholder="e.g. I am currently in the UK on a Student visa which expires in 3 months. I have been offered a job and want to switch to a Skilled Worker visa..."
                              className="min-h-[150px] rounded-none border-border"
                              {...field}
                              data-testid="input-situation"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="space-y-6 pt-4 border-t border-border">
                    <FormField
                      control={form.control}
                      name="consent"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 p-4 border border-border bg-muted/20">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                              className="mt-1"
                              data-testid="checkbox-consent"
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel className="text-sm font-medium leading-relaxed">
                              I consent to Britannia Visas & Immigration Consultancy processing my data for the purpose of this initial assessment.
                            </FormLabel>
                            <FormDescription className="text-xs">
                              We will not share your data with third parties without your explicit further consent.
                            </FormDescription>
                          </div>
                          <FormMessage className="ml-auto" />
                        </FormItem>
                      )}
                    />

                    <Button type="submit" className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 font-serif text-lg px-10 py-6 h-auto rounded-none" data-testid="button-submit-assessment">
                      Submit Assessment
                    </Button>
                  </div>

                </form>
              </Form>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
