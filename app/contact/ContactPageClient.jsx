"use client";

import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

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
import { toast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().optional(),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export default function ContactPageClient() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(values) {
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      console.log(values);
      toast({
        title: "Message Sent",
        description: "Thank you for your message. We'll get back to you soon!",
      });
      form.reset();
      setIsSubmitting(false);
    }, 1000);
  }

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-16">
      <div className="mx-auto max-w-3xl space-y-8 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Contact Us
        </h1>
        <p className="text-lg text-muted-foreground">
          We'd love to hear from you. Reach out for reservations, inquiries, or
          feedback.
        </p>
      </div>

      <div className="mt-16 grid gap-12 md:grid-cols-1">
        <div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Your email" {...field} />
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
                    <FormLabel>Phone (optional)</FormLabel>
                    <FormControl>
                      <Input placeholder="Your phone number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Your message"
                        rows={5}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Form>
        </div>
        <div className="space-y-6 flex-row justify-center ">
          <div className="flex items-start space-x-4">
            <MapPin className="mt-0.5 h-5 w-5 text-primary" />
            <div>
              <h3 className="font-medium">Address</h3>
              <p className="text-muted-foreground">123 Culinary Street</p>
              <p className="text-muted-foreground">Foodville, CA 90210</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Phone className="mt-0.5 h-5 w-5 text-primary" />
            <div>
              <h3 className="font-medium">Phone</h3>
              <p className="text-muted-foreground">(555) 123-4567</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <Mail className="mt-0.5 h-5 w-5 text-primary" />
            <div>
              <h3 className="font-medium">Email</h3>
              <p className="text-muted-foreground">info@restaurant.com</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 rounded-lg bg-muted p-6 text-center">
        <h2 className="text-xl font-semibold">Reservations</h2>
        <p className="mt-2 text-muted-foreground">
          For reservations, please call us at (555) 123-4567 or use our online
          reservation system.
        </p>
        <Button className="mt-4" asChild>
          <a href="/reservation">Make a Reservation</a>
        </Button>
      </div>
    </div>
  );
}
