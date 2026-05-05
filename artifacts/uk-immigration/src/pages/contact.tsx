import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useState } from "react";
import { Building, Mail, Phone, MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { PhoneInputWithCountry } from "@/components/PhoneInputWithCountry";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z
    .string()
    .min(1, { message: "Phone number is required." })
    .refine(s => s.trim().replace(/\D/g, "").length >= 8, {
      message: "Enter a valid number with at least 8 digits (country code may be separate).",
    }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // In a real app, this would be an API call
    console.log(values);
    setIsSubmitted(true);
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Header */}
      <section className="relative bg-primary text-primary-foreground py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-55" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1920&q=80)" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/60 to-transparent" />
        <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-4xl">
          <h1 className="font-serif text-5xl md:text-7xl font-bold tracking-tight mb-6">Contact Us</h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed max-w-2xl">
            Reach out to our team of immigration experts. We aim to respond to all enquiries within 24 hours.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-16">
            
            {/* Contact Info */}
            <div className="space-y-12">
              <div>
                <h2 className="font-serif text-3xl font-bold mb-8">Our Office</h2>
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <MapPin className="text-primary shrink-0 mt-1" size={24} />
                    <div>
                      <h4 className="font-bold text-lg mb-2">Address</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        Britannia Visas & Immigration Consultancy<br />
                        120 Chancery Lane<br />
                        London<br />
                        WC2A 1PX<br />
                        United Kingdom
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <Phone className="text-primary shrink-0 mt-1" size={24} />
                    <div>
                      <h4 className="font-bold text-lg mb-2">Telephone</h4>
                      <p className="text-muted-foreground">
                        +44 (0) 20 7123 4567<br />
                        <span className="text-sm">(Mon-Fri, 9am - 5:30pm UK Time)</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Mail className="text-primary shrink-0 mt-1" size={24} />
                    <div>
                      <h4 className="font-bold text-lg mb-2">Email</h4>
                      <p className="text-muted-foreground">
                        info@britannia-visas.co.uk
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="h-64 bg-muted border border-border flex flex-col items-center justify-center text-muted-foreground p-4 text-center">
                <Building size={48} className="mb-4 opacity-50" />
                <p className="font-medium">Map View</p>
                <p className="text-sm">Chancery Lane, London</p>
              </div>
            </div>

            {/* Simple Contact Form */}
            <div className="bg-card border border-border p-8 md:p-10 shadow-sm">
              <h2 className="font-serif text-2xl font-bold mb-6">Send a Message</h2>
              
              {isSubmitted ? (
                <div className="bg-muted p-8 text-center border border-border" data-testid="contact-success">
                  <h3 className="font-serif text-xl font-bold text-primary mb-2">Message Sent</h3>
                  <p className="text-muted-foreground">
                    Thank you for contacting us. A member of our team will be in touch shortly.
                  </p>
                  <Button 
                    variant="outline" 
                    className="mt-6 border-primary text-primary rounded-none"
                    onClick={() => setIsSubmitted(false)}
                  >
                    Send another message
                  </Button>
                </div>
              ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" className="rounded-none border-border focus-visible:ring-primary" {...field} data-testid="input-contact-name" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="john@example.com" className="rounded-none border-border focus-visible:ring-primary" {...field} data-testid="input-contact-email" />
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
                              inputClassName="focus-visible:ring-primary"
                              inputTestId="input-contact-phone"
                            />
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="How can we help you?" 
                              className="min-h-[120px] rounded-none border-border focus-visible:ring-primary" 
                              {...field} 
                              data-testid="input-contact-message"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-serif tracking-wide py-6 rounded-none" data-testid="button-contact-submit">
                      Send Message
                    </Button>
                  </form>
                </Form>
              )}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
