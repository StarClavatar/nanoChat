export type Messages = {
    type: string,
    text: string | null,
    date: string
}[];

export const messages: Messages = [
    {
        type: 'my-message',
        text: 'Привет! Кто ты?',
        date: new Date().toString()
    },
    {
        type: 'bot-message',
        text: 'Привет! Я чат-бот, умею отвечать на два сообщения, напиши "3g или "lte"',
        date: new Date().toString()
    },
    
]