import React, { useState } from 'react';
import OddsButton from './OddsButton';
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const formatBet = (bet: string): string => {
  if (!bet) return '';
  return bet.split(/[\s_]+/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
};

const MobileOddsCard = ({ prop }: { prop: any }) => {
  const [isOpen, setIsOpen] = useState(false);
  const sportsbooks = [
    'FanDuel', 'ESPN BET', 'DraftKings', 'Fliff', 'BetMGM',
    'Hard Rock Bet', 'BetRivers', 'Bally Bet', 'Caesars',
    'BetOnline.ag', 'Bovada', 'BetUS', 'betPARX',
    'BetAnySports', 'LowVig.ag'
  ];

  // Get first two visible sportsbooks
  const visibleSportsbooks = sportsbooks.filter(book => {
    const bookData = prop.sportsbooks[book];
    return bookData?.Over || bookData?.Under;
  }).slice(0, 2);

  // Get remaining sportsbooks
  const remainingSportsbooks = sportsbooks.filter(book => {
    const bookData = prop.sportsbooks[book];
    return (bookData?.Over || bookData?.Under) && !visibleSportsbooks.includes(book);
  });

  return (
    <Collapsible>
      <div className="bg-white rounded-lg shadow-md p-4">
        <div className="mb-4">
          <h3 className="text-lg font-semibold">{prop.player}</h3>
          <p className="text-sm text-gray-500">{prop.team}</p>
          <p className="text-sm font-medium mt-1">{formatBet(prop.prop)}</p>
        </div>

        <div className="space-y-4">
          {/* Always visible sportsbooks */}
          {visibleSportsbooks.map((book) => {
            const bookData = prop.sportsbooks[book];
            if (!bookData?.Over && !bookData?.Under) return null;

            return (
              <div key={book} className="border-b pb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">{book}</span>
                </div>
                <div className="space-y-2">
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-500 mb-1">Over/Under</span>
                    <div className="flex gap-2">
                      <OddsButton
                        odds={bookData?.Over?.odds}
                        line={bookData?.Over?.line}
                        link={bookData?.Over?.link}
                        outcome="Over"
                        bookmaker={book}
                      />
                      <OddsButton
                        odds={bookData?.Under?.odds}
                        line={bookData?.Under?.line}
                        link={bookData?.Under?.link}
                        outcome="Under"
                        bookmaker={book}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Collapsible section for remaining sportsbooks */}
          {remainingSportsbooks.length > 0 && (
            <CollapsibleContent>
              {remainingSportsbooks.map((book) => {
                const bookData = prop.sportsbooks[book];
                if (!bookData?.Over && !bookData?.Under) return null;

                return (
                  <div key={book} className="border-b pb-4 last:border-b-0">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">{book}</span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex flex-col">
                        <span className="text-xs text-gray-500 mb-1">Over/Under</span>
                        <div className="flex gap-2">
                          <OddsButton
                            odds={bookData?.Over?.odds}
                            line={bookData?.Over?.line}
                            link={bookData?.Over?.link}
                            outcome="Over"
                            bookmaker={book}
                          />
                          <OddsButton
                            odds={bookData?.Under?.odds}
                            line={bookData?.Under?.line}
                            link={bookData?.Under?.link}
                            outcome="Under"
                            bookmaker={book}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </CollapsibleContent>
          )}

          {/* Show more button */}
          {remainingSportsbooks.length > 0 && (
            <CollapsibleTrigger className="w-full">
              <Button
                variant="outline"
                className="w-full flex items-center justify-center gap-2"
                onClick={() => setIsOpen(!isOpen)}
              >
                <span>{isOpen ? 'Show Less' : 'Show More'}</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'transform rotate-180' : ''}`} />
              </Button>
            </CollapsibleTrigger>
          )}
        </div>
      </div>
    </Collapsible>
  );
};

export default MobileOddsCard;