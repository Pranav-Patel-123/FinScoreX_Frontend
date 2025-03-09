"use client";

import Image from "next/image";
import { Users, Rocket, Target } from "lucide-react";
import { Card } from "../../components/ui/card";
import { Button } from "../../components/ui/button";

export default function About() {
  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&h=400&fit=crop",
      bio: "With 15 years of industry experience, Sarah leads our vision and strategy."
    },
    {
      name: "Michael Chen",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&h=400&fit=crop",
      bio: "Tech innovator with a passion for building scalable solutions."
    },
    {
      name: "Emily Rodriguez",
      role: "Design Director",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=400&h=400&fit=crop",
      bio: "Creative force behind our product design and user experience."
    }
  ];

  const values = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "People First",
      description: "We believe in empowering our team and putting our customers at the heart of everything we do."
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      title: "Innovation",
      description: "Constantly pushing boundaries and exploring new possibilities in technology."
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Excellence",
      description: "Committed to delivering the highest quality solutions and exceeding expectations."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl font-bold tracking-tight mb-6 animate-fade-up">
              Transforming Ideas into Reality
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-up delay-100">
              We&apos;re a passionate team of creators, innovators, and problem-solvers dedicated to building the future of technology.
            </p>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-card py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="text-primary mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-all">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={400}
                  height={400}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-primary mb-2">{member.role}</p>
                  <p className="text-muted-foreground">{member.bio}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary text-primary-foreground py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">Join us in building the future of technology.</p>
          <Button
            variant="secondary"
            size="lg"
            className="text-lg"
            onClick={() => window.location.href = '/contact'}
          >
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
}
