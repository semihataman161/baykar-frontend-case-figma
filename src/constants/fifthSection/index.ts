import Zoomerr from '@/assets/images/fifthSection/zoomerr.svg';
import Shells from '@/assets/images/fifthSection/shells.svg';
import ArtVenue from '@/assets/images/fifthSection/artVenue.svg';
import Waves from '@/assets/images/fifthSection/waves.svg';
import HellenJummy from '@/assets/images/fifthSection/hellenJummy.svg';
import HellenaJohn from '@/assets/images/fifthSection/hellenaJohn.svg';
import DavidOshodi from '@/assets/images/fifthSection/davidOshodi.svg';
import CharoletteHanlin from '@/assets/images/fifthSection/charoletteHanlin.svg';
import type { ICompany } from "@/types/fifthSection";

export const companies: ICompany[] = [
    {
        logo: ArtVenue,
        name: 'ArtVenue',
        description: 'A eget sed posuere dui risus habitasse mauris. Venenatis aliquet id ultrices a lacus. Pretium vehicula pretium posuere justo sed.',
        teamMember: {
            name: 'David Oshodi',
            title: 'Manager',
            imgSrc: DavidOshodi,
        },
    },
    {
        logo: Zoomerr,
        name: 'Zoomerr',
        description: 'Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.',
        teamMember: {
            name: 'Hellen Jummy',
            title: 'Team Lead',
            imgSrc: HellenJummy,
        },
    },
    {
        logo: Shells,
        name: 'SHELLS',
        description: 'Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla.',
        teamMember: {
            name: 'Hellena John',
            title: 'Co-founder',
            imgSrc: HellenaJohn,
        },
    },
    {
        logo: ArtVenue,
        name: 'ArtVenue',
        description: 'A eget sed posuere dui risus habitasse mauris. Venenatis aliquet id ultrices a lacus. Pretium vehicula pretium posuere justo sed.',
        teamMember: {
            name: 'David Oshodi',
            title: 'Manager',
            imgSrc: DavidOshodi,
        },
    },
    {
        logo: Waves,
        name: 'WAVES',
        description: 'Magna egestas aliquet ut integer non. Sed diam enim nibh sit. Aliquam laoreet aenean metus nibh eu scelerisque.',
        teamMember: {
            name: 'Charolette Hanlin',
            title: 'CEO',
            imgSrc: CharoletteHanlin,
        },
    },
];