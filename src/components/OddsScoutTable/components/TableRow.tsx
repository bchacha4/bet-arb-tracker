import React from 'react';
import OddsButton from './OddsButton';

const TableRow = ({ prop }: { prop: any }) => {
  return (
    <tr className="bg-white border-b border-gray-200 hover:bg-gray-50">
      <td className="px-6 py-4 font-medium">
        {prop.player}
        <br />
        <span className="text-gray-500">{prop.team}</span>
      </td>
      <td className="px-6 py-4">{prop.prop}</td>
      <td className="px-6 py-4">{prop.outcome}</td>
      <td className="px-6 py-4">
        <OddsButton
          odds={prop.sportsbooks['FanDuel']?.odds}
          line={prop.sportsbooks['FanDuel']?.line}
          link={prop.sportsbooks['FanDuel']?.link}
        />
      </td>
      <td className="px-6 py-4">
        <OddsButton
          odds={prop.sportsbooks['ESPN BET']?.odds}
          line={prop.sportsbooks['ESPN BET']?.line}
          link={prop.sportsbooks['ESPN BET']?.link}
        />
      </td>
      <td className="px-6 py-4">
        <OddsButton
          odds={prop.sportsbooks['DraftKings']?.odds}
          line={prop.sportsbooks['DraftKings']?.line}
          link={prop.sportsbooks['DraftKings']?.link}
        />
      </td>
      <td className="px-6 py-4">
        <OddsButton
          odds={prop.sportsbooks['Fliff']?.odds}
          line={prop.sportsbooks['Fliff']?.line}
          link={prop.sportsbooks['Fliff']?.link}
        />
      </td>
      <td className="px-6 py-4">
        <OddsButton
          odds={prop.sportsbooks['BetMGM']?.odds}
          line={prop.sportsbooks['BetMGM']?.line}
          link={prop.sportsbooks['BetMGM']?.link}
        />
      </td>
      <td className="px-6 py-4">
        <OddsButton
          odds={prop.sportsbooks['Hard Rock Bet']?.odds}
          line={prop.sportsbooks['Hard Rock Bet']?.line}
          link={prop.sportsbooks['Hard Rock Bet']?.link}
        />
      </td>
      <td className="px-6 py-4">
        <OddsButton
          odds={prop.sportsbooks['BetRivers']?.odds}
          line={prop.sportsbooks['BetRivers']?.line}
          link={prop.sportsbooks['BetRivers']?.link}
        />
      </td>
      <td className="px-6 py-4">
        <OddsButton
          odds={prop.sportsbooks['Bally Bet']?.odds}
          line={prop.sportsbooks['Bally Bet']?.line}
          link={prop.sportsbooks['Bally Bet']?.link}
        />
      </td>
      <td className="px-6 py-4">
        <OddsButton
          odds={prop.sportsbooks['Caesars']?.odds}
          line={prop.sportsbooks['Caesars']?.line}
          link={prop.sportsbooks['Caesars']?.link}
        />
      </td>
      <td className="px-6 py-4">
        <OddsButton
          odds={prop.sportsbooks['BetOnline.ag']?.odds}
          line={prop.sportsbooks['BetOnline.ag']?.line}
          link={prop.sportsbooks['BetOnline.ag']?.link}
        />
      </td>
      <td className="px-6 py-4">
        <OddsButton
          odds={prop.sportsbooks['Bovada']?.odds}
          line={prop.sportsbooks['Bovada']?.line}
          link={prop.sportsbooks['Bovada']?.link}
        />
      </td>
      <td className="px-6 py-4">
        <OddsButton
          odds={prop.sportsbooks['BetUS']?.odds}
          line={prop.sportsbooks['BetUS']?.line}
          link={prop.sportsbooks['BetUS']?.link}
        />
      </td>
      <td className="px-6 py-4">
        <OddsButton
          odds={prop.sportsbooks['betPARX']?.odds}
          line={prop.sportsbooks['betPARX']?.line}
          link={prop.sportsbooks['betPARX']?.link}
        />
      </td>
      <td className="px-6 py-4">
        <OddsButton
          odds={prop.sportsbooks['BetAnySports']?.odds}
          line={prop.sportsbooks['BetAnySports']?.line}
          link={prop.sportsbooks['BetAnySports']?.link}
        />
      </td>
      <td className="px-6 py-4">
        <OddsButton
          odds={prop.sportsbooks['LowVig.ag']?.odds}
          line={prop.sportsbooks['LowVig.ag']?.line}
          link={prop.sportsbooks['LowVig.ag']?.link}
        />
      </td>
    </tr>
  );
};

export default TableRow;