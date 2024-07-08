import NibhViverra from '@/assets/images/secondSection/nibhViverra.svg';
import NibhViverraBackground from '@/assets/images/secondSection/nibhViverraBackground.svg';
import CursusAmet from '@/assets/images/secondSection/cursusAmet.svg';
import CursusAmetBackground from '@/assets/images/secondSection/cursusAmetBackground.svg';
import IpsumFermentum from '@/assets/images/secondSection/ipsumFermentum.svg';
import IpsumFermentumBackground from '@/assets/images/secondSection/ipsumFermentumBackground.svg';
import type { ISecondSectionItem } from '@/types/secondSection';

export const items: ISecondSectionItem[] = [
    {
        backgroundSrc: NibhViverraBackground,
        backgroundLeft: '28px',
        imageSrc: NibhViverra,
        alt: 'nibhViverra',
        title: 'Nibh viverra',
        description: 'Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.'
    },
    {
        backgroundSrc: CursusAmetBackground,
        backgroundLeft: '24px',
        imageSrc: CursusAmet,
        alt: 'cursusAmet',
        title: 'Cursus amet',
        description: 'Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.'
    },
    {
        backgroundSrc: IpsumFermentumBackground,
        backgroundLeft: '44px',
        imageSrc: IpsumFermentum,
        alt: 'ipsumFermentum',
        title: 'Ipsum fermentum',
        description: 'Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.'
    }
];