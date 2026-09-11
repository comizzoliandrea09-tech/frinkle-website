import React from 'react';
import FlavorCard from './FlavorCard';

const flavors = [
  {
    id: 'strawberry',
    name: 'Fragola Rossa',
    description: 'Un\'esplosione di dolcezza naturale catturata in ogni goccia. Le nostre fragole selezionate a mano dann vita a una bevanda che bilancia perfettamente acidità e dolcezza.',
    details: [
      'Senza conservanti',
      'Gusto authentico',
      'Ricca di vitamine'
    ],
    color: '--frinkle-red'
  },
  {
    id: 'apple',
    name: 'Mela Verde',
    description: 'La croccantezza delle mele verdi più fresche incontra una leggera nota acidula per una bevanda rinvigorente e dissetante.',
    details: [
      'Energia naturale',
      'Digestione facilitata',
      'Zero zuccheri aggiunti'
    ],
    color: '--frinkle-green'
  },
  {
    id: 'blueberry',
    name: 'Mirtillo Blu',
    description: 'Il gusto intenso e leggermente acidulo dei mirtilli selvatici si fonde con note dolci per creare un\'esperienza sofisticata e profondamente soddisfacente.',
    details: [
      'Antiossidanti naturali',
      'Supporto cognitivo',
      'Gusto complesso ed elegante'
    ],
    color: '--frinkle-blue'
  }
];

const Flavors = () => {
  return (
    <section className="flavors" id="flavors">
      {flavors.map(flavor => (
        <FlavorCard key={flavor.id} {...flavor} />
      ))}
    </section>
  );
};

export default Flavors;