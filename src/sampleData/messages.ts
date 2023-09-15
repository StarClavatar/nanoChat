export type Messages = {
    type: string,
    text: string | null,
    date: string
}[];

export const messages: Messages = [
    {
        type: 'my-message',
        text: '3g',
        date: '2023-09-15T09:18:20'
    },
    {
        type: 'bot-message',
        text: '3G - это технологии мобильной связи третьего поколения, третье поколение сотовых сетей. Открывают новые возможности: <br/> • высокое качество передачи голоса <br/> • быстрый мобильный Интернет <br/> • видеозвонки <br/> • мобильное телевидение. <br/> Также могу рассказать о том, <userlink>что такое LTE</userlink>.',
        date: '2023-09-15T09:18:21'
    },
    
]