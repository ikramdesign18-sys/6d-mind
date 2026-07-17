import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Terminal, Send, Mail, MapPin } from "lucide-react";

import { CONTACT_INFO, SOCIAL_LINKS } from "@/data/contact";
import { EXPERTISE } from "@/data/expertise";

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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const PROJECT_TYPES = [
  ...EXPERTISE.map(e => e.name),
  "Complete Digital Product",
  "Ongoing Support",
  "Other"
];

const BUDGETS = [
  "Under $1,000",
  "$1,000 - $3,000",
  "$3,000 - $5,000",
  "$5,000 - $10,000",
  "$10,000+",
  "Let's discuss"
];

const formSchema = z.object({
  fullName: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().optional(),
  projectType: z.string().min(1, "Please select a project type"),
  budget: z.string().min(1, "Please select a budget range"),
  timeline: z.string().min(1, "Timeline is required"),
  description: z.string().min(10, "Please provide more details about your project"),
  communication: z.string().min(1, "Please select preferred communication"),
});

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      company: "",
      projectType: "",
      budget: "",
      timeline: "",
      description: "",
      communication: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    // Simulate network request
    setTimeout(() => {
      console.log("Form data (client-side only):", values);
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  }

  return (
    <div className="w-full">
      {/* Header */}
      <section className="pt-20 pb-12 px-6 bg-foreground text-background">
        <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-12">
          <div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">Initialize.</h1>
            <p className="text-xl text-muted/80 font-light mb-12 max-w-md">
              Ready to build? Send over the details of your vision, and I'll analyze how we can make it a reality.
            </p>
            
            <div className="space-y-6 font-mono text-sm">
              <div className="flex items-center gap-4 text-muted/90">
                <Mail size={18} className="text-primary" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white transition-colors">{CONTACT_INFO.email}</a>
              </div>
              <div className="flex items-center gap-4 text-muted/90">
                <MapPin size={18} className="text-primary" />
                <span>{CONTACT_INFO.location}</span>
              </div>
              <div className="flex items-center gap-4 text-muted/90">
                <Terminal size={18} className="text-primary" />
                <span className="text-primary">{CONTACT_INFO.availability}</span>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="font-mono text-xs text-muted/50 tracking-widest uppercase mb-4">Direct Channels</h3>
              <div className="flex flex-wrap gap-3">
                {SOCIAL_LINKS.map(link => (
                  <a 
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-white/20 text-white hover:bg-white/10 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-background text-foreground p-8 md:p-10 border border-border relative shadow-2xl md:-mb-32">
            {isSuccess ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20 animate-in fade-in zoom-in duration-500">
                <div className="w-16 h-16 bg-primary/10 text-primary flex items-center justify-center rounded-full mb-6">
                  <Terminal size={32} />
                </div>
                <h2 className="text-2xl font-bold mb-4">Transmission Successful</h2>
                <p className="text-muted-foreground mb-8 max-w-sm">
                  Your idea has entered the system. I'll review the details and respond as soon as possible.
                </p>
                <Button 
                  onClick={() => {
                    setIsSuccess(false);
                    form.reset();
                  }}
                  variant="outline"
                  className="rounded-none font-mono uppercase tracking-widest"
                >
                  Send Another
                </Button>
              </div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-mono text-xs uppercase tracking-wider">Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Jane Doe" className="rounded-none bg-muted/50 border-border focus-visible:ring-primary focus-visible:ring-offset-0" {...field} />
                          </FormControl>
                          <FormMessage className="text-xs" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-mono text-xs uppercase tracking-wider">Email Address</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="jane@example.com" className="rounded-none bg-muted/50 border-border focus-visible:ring-primary focus-visible:ring-offset-0" {...field} />
                          </FormControl>
                          <FormMessage className="text-xs" />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-mono text-xs uppercase tracking-wider">Company / Organization (Optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="Acme Corp" className="rounded-none bg-muted/50 border-border focus-visible:ring-primary focus-visible:ring-offset-0" {...field} />
                        </FormControl>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="projectType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-mono text-xs uppercase tracking-wider">Project Type</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="rounded-none bg-muted/50 border-border focus:ring-primary focus:ring-offset-0">
                                <SelectValue placeholder="Select type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="rounded-none">
                              {PROJECT_TYPES.map(type => (
                                <SelectItem key={type} value={type} className="rounded-none focus:bg-primary/10 focus:text-primary">{type}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage className="text-xs" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="budget"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-mono text-xs uppercase tracking-wider">Estimated Budget</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="rounded-none bg-muted/50 border-border focus:ring-primary focus:ring-offset-0">
                                <SelectValue placeholder="Select budget" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="rounded-none">
                              {BUDGETS.map(budget => (
                                <SelectItem key={budget} value={budget} className="rounded-none focus:bg-primary/10 focus:text-primary">{budget}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage className="text-xs" />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="timeline"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-mono text-xs uppercase tracking-wider">Expected Timeline</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="rounded-none bg-muted/50 border-border focus:ring-primary focus:ring-offset-0">
                                <SelectValue placeholder="Select timeline" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="rounded-none">
                              <SelectItem value="ASAP">ASAP (Urgent)</SelectItem>
                              <SelectItem value="1-2 months">1-2 months</SelectItem>
                              <SelectItem value="3-6 months">3-6 months</SelectItem>
                              <SelectItem value="Flexible">Flexible</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage className="text-xs" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="communication"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-mono text-xs uppercase tracking-wider">Preferred Comms</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="rounded-none bg-muted/50 border-border focus:ring-primary focus:ring-offset-0">
                                <SelectValue placeholder="Select method" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="rounded-none">
                              <SelectItem value="Email">Email</SelectItem>
                              <SelectItem value="Video Call">Video Call</SelectItem>
                              <SelectItem value="WhatsApp">WhatsApp</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage className="text-xs" />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-mono text-xs uppercase tracking-wider">Project Description</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell me about your goals, current challenges, and what success looks like..." 
                            className="min-h-[120px] rounded-none bg-muted/50 border-border focus-visible:ring-primary focus-visible:ring-offset-0 resize-y"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    className="w-full rounded-none h-14 text-base font-bold tracking-wide hover:bg-primary transition-colors flex items-center gap-2"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>Processing <Terminal className="animate-pulse" size={18} /></>
                    ) : (
                      <>Submit Inquiry <Send size={18} /></>
                    )}
                  </Button>
                </form>
              </Form>
            )}
          </div>
        </div>
      </section>

      {/* Spacing for overlapping card */}
      <div className="h-32 hidden md:block"></div>
    </div>
  );
}
