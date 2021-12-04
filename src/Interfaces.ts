export interface ProjectsSectionProps extends ProjectListProps {
    title: string;
}

export interface ProjectListProps {
    projectCards: ProjectCardProps[]
}

export interface ProjectCardProps {
    image: string;
    imageLabel: string;
    title: string;
    date: string;
    tag: string;
    description: string;
    url: string;
}