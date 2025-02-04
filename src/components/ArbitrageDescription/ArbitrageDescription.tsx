import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ArbitrageDescription = () => {
  const isMobile = useIsMobile();

  const content = (
    <div className="space-y-4 text-foreground/80">
      <p className="text-sm md:text-base leading-relaxed">
        Arbitrage betting is a strategy that takes advantage of differences in odds offered by sportsbooks for the same event. By betting on all possible outcomes using specific odds, you can guarantee a profit regardless of the result.
      </p>
      <p className="text-sm md:text-base">Our table below helps you identify these opportunities by:</p>
      <ul className="list-disc pl-5 space-y-2">
        <li className="text-sm md:text-base">Showing the best available odds across different sportsbooks</li>
        <li className="text-sm md:text-base">Calculating optimal bet sizes based on your total betting amount</li>
        <li className="text-sm md:text-base">Displaying guaranteed profit for each arbitrage opportunity</li>
      </ul>
      <p className="text-sm md:text-base leading-relaxed">
        <strong>To use the table:</strong> Enter your total betting amount, review the available opportunities, and place the recommended bets at the specified sportsbooks. The table automatically calculates how much to bet on each side to guarantee the displayed profit.
      </p>
    </div>
  );

  if (isMobile) {
    return (
      <Card className="mb-4 bg-white shadow-sm border-border/50">
        <CardContent className="pt-3 px-0">
          <Accordion type="single" collapsible>
            <AccordionItem value="description" className="border-none">
              <AccordionTrigger className="px-6 hover:no-underline">
                <h2 className="text-xl font-semibold text-foreground">Understanding Arbitrage Betting</h2>
              </AccordionTrigger>
              <AccordionContent className="px-6">
                {content}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="mb-4 bg-white shadow-sm border-border/50">
      <CardContent className="pt-6">
        <h2 className="text-2xl font-semibold mb-4 text-foreground">Understanding Arbitrage Betting</h2>
        {content}
      </CardContent>
    </Card>
  );
};

export default ArbitrageDescription;