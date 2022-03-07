export interface AboutJobProps {
    job: string;
    company: string;
    period: string;
    role: string;
}

export interface ProjectBoxProps {
    title?: string;
    subtitle?: string;
    tools?: string;
    description?: string;
    buttonText?: string;
    onClick?: () => void;
    children?: React.ReactNode;
}

export interface HeaderProps {
    withProfile?: boolean;
}