import { PROCESS_STEPS } from "@/data/process";
import { Link } from "wouter";

export default function Process() {
  return (
    <div className="w-full bg-background relative overflow-hidden">
      
      {/* Header */}
      <section className="pt-20 pb-24 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">The Pathway.</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            A structured, repeatable methodology to take ideas from abstraction to production. No guesswork, just engineering.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="pb-32 px-6 relative z-10">
        <div className="container mx-auto max-w-4xl relative">
          {/* Continuous vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 z-0 hidden sm:block"></div>
          
          <div className="space-y-12 sm:space-y-24">
            {PROCESS_STEPS.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={step.id} className={`relative flex flex-col sm:flex-row items-start ${isEven ? 'sm:flex-row-reverse' : ''} gap-8`}>
                  
                  {/* Center Node */}
                  <div className="absolute left-8 sm:left-1/2 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-primary ring-4 ring-background z-10 mt-1.5 hidden sm:block"></div>
                  
                  {/* Mobile Node */}
                  <div className="sm:hidden absolute left-0 top-0 w-2 h-2 rounded-full bg-primary mt-2.5"></div>

                  {/* Content Box */}
                  <div className={`sm:w-1/2 pl-6 sm:pl-0 ${isEven ? 'sm:pr-16 text-left sm:text-right' : 'sm:pl-16 text-left'}`}>
                    <div className="font-mono text-primary text-4xl mb-4 font-light opacity-50">
                      0{index + 1}
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground mb-6 font-light">{step.description}</p>
                    
                    <ul className={`space-y-2 text-sm font-mono flex flex-col ${isEven ? 'sm:items-end' : 'sm:items-start'}`}>
                      {step.activities.map(activity => (
                        <li key={activity} className="inline-block px-3 py-1 bg-muted border border-border">
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Spacer for the other side */}
                  <div className="hidden sm:block sm:w-1/2"></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-24 bg-foreground text-background text-center px-6">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to start step one?</h2>
          <p className="text-muted/80 mb-8 font-light">Every successful product starts with a conversation.</p>
          <Link href="/contact" className="inline-block px-8 py-4 bg-primary text-white font-medium hover:bg-primary/90 transition-colors">
            Initiate Discovery Phase
          </Link>
        </div>
      </section>
    </div>
  );
}
