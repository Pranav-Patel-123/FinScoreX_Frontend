"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { Card } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { Button } from "../../components/ui/button";


export default function Contact() {
  // const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      details: "+1 (555) 123-4567",
      description: "Monday to Friday, 9am to 6pm PST"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      details: "contact@example.com",
      description: "We'll respond within 24 hours"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Office",
      details: "123 Innovation Drive",
      description: "San Francisco, CA 94105"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl font-bold tracking-tight mb-6">Get in Touch</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have a question or want to work together? We'd love to hear from you.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="text-primary mb-4">{info.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{info.title}</h3>
              <p className="font-medium mb-1">{info.details}</p>
              <p className="text-muted-foreground">{info.description}</p>
            </Card>
          ))}
        </div>

        {/* Contact Form */}
        <Card className="max-w-2xl mx-auto p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium">
                Subject
              </label>
              <Input
                id="subject"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <Textarea
                id="message"
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              />
            </div>
            <Button type="submit" className="w-full" size="lg">
              <Send className="h-4 w-4 mr-2" />
              Send Message
            </Button>
          </form>
        </Card>
      </div>

      {/* Map Section */}
      <div className="h-96 w-full mt-16 bg-muted">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100939.98555098464!2d-122.507640!3d37.757815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan+Francisco%2C+CA!5e0!3m2!1sen!2sus!4v1491845825667"
          className="w-full h-full border-0"
          allowFullScreen
          loading="lazy"
        />
      </div>
    </div>
  );
}