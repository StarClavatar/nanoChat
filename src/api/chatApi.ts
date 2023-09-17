const uuid = '772c9859-4dd3-4a0d-b87d-d76b9f43cfa4' 
const baseUrl = 'https://biz.nanosemantics.ru/api/bat/nkd/json/Chat'

export async function chatInit(): Promise<string> {
    const cuid = localStorage.getItem('cuid')
    const response = await fetch(`${baseUrl}.init`,
        {
            method: "POST",
            headers: { 
            },
            body: JSON.stringify({
                uuid: uuid,
                cuid: cuid
            })
        }
    )
    const res = await response.json();
    localStorage.setItem('cuid',res.result.cuid)
    return res.result.cuid
}

export async function chatRequest(txt: string): Promise<string> {
    const cuid = localStorage.getItem('cuid')
    const response = await fetch(`${baseUrl}.request`,
        {
            method: "POST",
            headers: { 
            },
            body: JSON.stringify({
                cuid: cuid,
                text: txt
            })
        }
    )
    const res = await response.json();
    localStorage.setItem('cuid',res.result.cuid)
    return res.result.text.value   
}