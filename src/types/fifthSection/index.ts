export interface ITeamMember {
    name: string;
    title: string;
    imgSrc: string;
}

export interface ICompany {
    logo: string;
    name: string;
    description: string;
    teamMember: ITeamMember;
}