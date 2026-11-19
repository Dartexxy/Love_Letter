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
	title: 'Jedna vec mi už došla... 😇',
	body: 'S tebou sa človek nikdy nenudí. Raz riešime úplné vážnosti, inokedy sa doťahujeme kvôli slovíčkam alebo úplným maličkostiam. A ja mám rád oboje. 😆❤️',
	warmthLevel: 2,
  },
  {
	title: 'A ešte niečo... 🥰',
	body: 'Veľmi rád počúvam, ako si sa mala. Či už máš za sebou niečo výnimočné, alebo len úplne obyčajný deň. Lebo ma zaujíma všetko, čo mi chceš porozprávať. ❤️',
	warmthLevel: 3,
  },
  {
	title: 'A potom som si niečo uvedomil... 🥰',
	body: 'Že už dávno nie si len niekto, s kým si rád píšem. Stala si sa človekom, na ktorého sa každý deň teším. A to je naozaj krásny pocit. ❤️',
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
	title: 'Ľúbim Ťa, zlatíčko moje ❤️',
	body: 'Som naozaj šťastný, že Ťa mám. A ak je toto len začiatok nášho spoločného príbehu, tak sa nesmierne teším na všetko, čo ešte spolu zažijeme. 🥰😘❤️',
	warmthLevel: 7,
  },
] as const;

export const postscript = 'P.S. Dúfam, že ti to vyčarilo úsmev 🥰';
