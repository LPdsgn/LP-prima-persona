export interface Testimonials {
    quote: string;
    quoteColor?: string;
    name: string;
    role?: string;
    pinned?: boolean;
}

export const testimonials: Testimonials[] = [
    {
        quote: '"Luigi is a competent and punctual professional, who demonstrates full control of the work entrusted to him. Welcoming and always polite."',
        quoteColor: 'text-pink-500 dark:text-pink-400',
        name: 'Alessia Canarino',
        role: 'Wine Educator',
        pinned: true
    },
    {
        quote: '"Luigi created my company\'s website. He is professional and lived up to my expectations. I highly recommend it to anyone who needs to design and create their own site in any area."',
        quoteColor: 'text-orange-500 dark:text-orange-300',
        name: 'Francesco Belcuore',
        role: 'Engineer & Entrepreneur',
        pinned: true
    },
    {
        quote: '"An exemplary professional, he puts a lot of passion into it and is very good at directing his strong creative nature to the service of practicality, without getting lost in merely aesthetic exercises. Top!"',
        quoteColor: 'text-green-700 dark:text-green-500',
        name: 'Andrea Avitabile',
        role: 'SEO Copywriter'
    },
]