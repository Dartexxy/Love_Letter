export interface Chapter {
  title: string;
  body: string;
  warmthLevel: number;
}

export const chapters: readonly Chapter[] = [
  {
	title: 'Ahoooj, Terezka! 😇',
	body: 'Vitaj v jednej úplne zbytočnej aplikácii, ktorú som vyrobil len a len pre teba 😆❤️',
	warmthLevel: 1,
  },
  {
	title: 'Vieš čo? 😆',
	body: 'Za ten čas sme si stihli vytvoriť celkom slušnú zbierku spoločných hlúpostí. A mám pocit, že sa tá zbierka ešte poriadne rozrastie 🤣❤️',
	warmthLevel: 2,
  },
  {
	title: 'Ale vieš, čo je na tom najlepšie? 😊',
	body: 'Že sa s tebou dokážem smiať aj na úplných maličkostiach. A že aj obyčajný deň je krajší, keď si jeho súčasťou. ❤️',
	warmthLevel: 3,
  },
  {
	title: 'A ešte niečo... 🥰',
	body: 'Veľmi rád počúvam, ako si sa mala. Či už máš za sebou niečo výnimočné, alebo len úplne obyčajný deň. Lebo ma zaujíma všetko, čo mi chceš porozprávať. ❤️',
	warmthLevel: 4,
  },
  {
	title: 'A keď sme spolu... 🥹',
	body: 'Tak si vždy uvedomím, aké krásne je mať ťa pri sebe. Či už sa niekam vyberieme, alebo len tak sedíme spolu. 🥰',
	warmthLevel: 5,
  },
  {
	title: 'Vieš, čo si niekedy pomyslím? ❤️',
	body: 'Že som naozaj rád, že sme sa vtedy v septembri našli. A že sa z jedného obyčajného rozhovoru stalo niečo také krásne. 🥹',
	warmthLevel: 6,
  },
  {
	title: 'Ľúbim Ťa, Terezka moja. ❤️',
	body: 'A teším sa na všetky ďalšie spoločné chvíle, malé dobrodružstvá aj úplne obyčajné dni, ktoré nás ešte čakajú. 🥰😘',
	warmthLevel: 7,
  },
] as const;

export const postscript = 'P.S. Toto celé som vyrobil len preto, aby som ti vyčaril úsmev. 🥰';
