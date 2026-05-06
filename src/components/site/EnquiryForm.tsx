import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Send, Loader2, CheckCircle2 } from "lucide-react";
import { Reveal } from "./Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address"),
  organisation: z.string().min(2, "Organisation name is required"),
  model: z.enum(["xLearnAI", "xMeetAI", "Both"], {
    required_error: "Please select a model",
  }),
  size: z.enum(["65", "75", "86", "Multiple"], {
    required_error: "Please select a size",
  }),
  quantity: z.string().min(1, "Quantity is required"),
  purpose: z.string().min(10, "Please provide more details about your requirements"),
});

type FormData = z.infer<typeof formSchema>;

export function EnquiryForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      organisation: "",
      quantity: "",
      purpose: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    // Format the message for WhatsApp and Email
    const message = `
🔔 New IMPEX xSeries Enquiry

👤 Name: ${data.name}
📞 Phone: ${data.phone}
📧 Email: ${data.email}
🏢 Organisation: ${data.organisation}
📱 Model: ${data.model}
📏 Size: ${data.size}"
🔢 Quantity: ${data.quantity}
📝 Purpose: ${data.purpose}

---
Submitted via IMPEX xSeries Website
    `.trim();

    try {
      // Simulate API call - Replace with actual backend endpoint
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // WhatsApp Integration (opens WhatsApp with pre-filled message)
      const whatsappNumber = "910000000000"; // Replace with actual number
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
      
      // Email Integration (opens default email client)
      const emailSubject = `IMPEX xSeries Enquiry - ${data.name}`;
      const emailBody = message;
      const emailUrl = `mailto:sales@impex.example?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

      // Open both WhatsApp and Email
      window.open(whatsappUrl, "_blank");
      window.open(emailUrl, "_blank");

      setIsSuccess(true);
      form.reset();

      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="enquiry" className="py-16 sm:py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center">
            <p className="text-xs sm:text-sm font-semibold tracking-widest text-primary uppercase">
              Get in Touch
            </p>
            <h2 className="mt-3 sm:mt-4 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight tracking-tight">
              Request a Quote
            </h2>
            <p className="mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Fill out the form below and our team will get back to you within 24 hours with a
              detailed quotation.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 sm:mt-16 rounded-2xl sm:rounded-3xl border border-border bg-card shadow-card p-6 sm:p-10 lg:p-12">
            {isSuccess ? (
              <div className="text-center py-12">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <CheckCircle2 className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Thank you for your enquiry!</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Your request has been sent via WhatsApp and Email. Our team will contact you
                  shortly.
                </p>
              </div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your full name" {...field} />
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
                          <FormLabel>Phone Number *</FormLabel>
                          <FormControl>
                            <Input placeholder="+91 00000 00000" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address *</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="your.email@company.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="organisation"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Organisation *</FormLabel>
                          <FormControl>
                            <Input placeholder="Your School / Company Name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <FormField
                      control={form.control}
                      name="model"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Preferred Model *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select model" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="xLearnAI">xLearnAI</SelectItem>
                              <SelectItem value="xMeetAI">xMeetAI</SelectItem>
                              <SelectItem value="Both">Both Models</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="size"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Preferred Size *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select size" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="65">65"</SelectItem>
                              <SelectItem value="75">75"</SelectItem>
                              <SelectItem value="86">86"</SelectItem>
                              <SelectItem value="Multiple">Multiple Sizes</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="quantity"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Quantity *</FormLabel>
                          <FormControl>
                            <Input type="number" min="1" placeholder="1" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="purpose"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Purpose / Requirements *</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us about your use case, installation requirements, or any specific questions..."
                            className="min-h-[120px] resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-6 text-base"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Submit Enquiry
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-muted-foreground">
                    * Required fields. Your enquiry will be sent via WhatsApp and Email
                    simultaneously.
                  </p>
                </form>
              </Form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
