export interface TextInputProps{
    name:string,
    placeholder:string,
    value?:string,
    onChange?: () => void
}

export interface NavHeaderProps{
    firstli:string,
    secondli:string,
    thirdli:string,
    fourthli:string
}

export interface ButtonProps{
    displayText:string,
    rounded?:boolean,
    onClick?: () => void
}

export interface CustomerCardProps{
    opinion:string,
    fullName:string,
    imagen:string,
    formato:string
}

export interface WorkerCardProps{
    fullName:string,
    imagen:string,
    formato:string
}

export interface CustomerCardListProps{
    customers: CustomerCardProps[]
}

export interface WorkerCardListProps{
    workers: WorkerCardProps[]
}

export interface ServiceCardProps{
    serviceName:string,
    imagen:string,
    formato:string
}

export interface ServiceCardListProps{
    servicios:ServiceCardProps[]
}

export interface ProjectCardProps{
    projectName:string,
    imagen:string
    formato:string
}

export interface ProjectCardListProps{
    projects:ProjectCardProps[]
}