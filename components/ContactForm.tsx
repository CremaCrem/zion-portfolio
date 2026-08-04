"use client";

import { useState } from 'react';
import emailjs from '@emailjs/browser';

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "pending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    // Honeypot check
    if (formData.get("bot-field")) {
      setStatus("success"); // Silently discard
      return;
    }

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    if (!name || !email || !message) {
      alert("Please fill out all fields.");
      return;
    }

    setStatus("pending");

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: name,
          from_email: email,
          message: message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setStatus("success");
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="h-full flex items-center justify-center p-12 border border-accent/20 bg-accent/5 rounded-[22px]">
        <p className="text-accent font-mono font-bold text-lg">
          {">"} packet delivered ✓
        </p>
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className="h-full flex flex-col items-center justify-center p-12 border border-red-500/20 bg-red-500/5 rounded-[22px] space-y-4">
        <p className="text-red-400 font-mono font-bold text-lg">
          {">"} Error: Message didn't send.
        </p>
        <p className="text-dim text-sm text-center max-w-sm">
          Please try again later or email me directly at <a href="mailto:j3remyz1on@gmail.com" className="text-primary underline hover:text-accent transition-colors">j3remyz1on@gmail.com</a>.
        </p>
        <button 
          onClick={() => setStatus("idle")}
          className="mt-4 px-6 py-2 border border-dim/30 rounded text-sm hover:bg-dim/10 hover:text-primary transition-colors text-dim font-bold"
        >
          Reset Connection
        </button>
      </div>
    );
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      {/* Honeypot */}
      <input type="text" name="bot-field" className="hidden" tabIndex={-1} autoComplete="off" />
      
      <div className="flex flex-col space-y-1.5">
        <label htmlFor="name" className="text-sm font-bold text-dim tracking-wider uppercase">Name</label>
        <input 
          id="name" 
          name="name"
          type="text" 
          required
          className="bg-base/50 border border-dim/20 rounded-lg p-3 text-primary focus:outline-none focus:border-accent focus:bg-base transition-colors placeholder:text-dim/40 shadow-inner shadow-black/20" 
          placeholder="visitor" 
        />
      </div>
      <div className="flex flex-col space-y-1.5">
        <label htmlFor="email" className="text-sm font-bold text-dim tracking-wider uppercase">Email</label>
        <input 
          id="email" 
          name="email"
          type="email" 
          required
          className="bg-base/50 border border-dim/20 rounded-lg p-3 text-primary focus:outline-none focus:border-accent focus:bg-base transition-colors placeholder:text-dim/40 shadow-inner shadow-black/20" 
          placeholder="visitor@network.local" 
        />
      </div>
      <div className="flex flex-col space-y-1.5">
        <label htmlFor="message" className="text-sm font-bold text-dim tracking-wider uppercase">Message</label>
        <textarea 
          id="message" 
          name="message"
          rows={5} 
          required
          className="bg-base/50 border border-dim/20 rounded-lg p-3 text-primary focus:outline-none focus:border-accent focus:bg-base transition-colors placeholder:text-dim/40 resize-none shadow-inner shadow-black/20" 
          placeholder="Enter payload..." 
        />
      </div>
      <button 
        type="submit" 
        disabled={status === "pending"}
        className="w-full bg-accent/10 border border-accent/20 text-accent font-bold py-4 rounded-xl hover:bg-accent hover:text-base transition-all disabled:opacity-50 disabled:cursor-wait active:scale-[0.98]"
      >
        {status === "pending" ? "sending_packet..." : "./send_packet.sh"}
      </button>
    </form>
  );
}
