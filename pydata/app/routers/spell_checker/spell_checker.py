import requests
import openai


def spell_check(content: str):
    s = content.split(' ')
    res = ''

    for i in s:
        response = requests.get("https://mora-bot.kr/api/v1/grammar?string=" + i)
        result = response.json()

        if (result['status'] == 200):
            if (result['errnum'] > 0):
                res += ' ' + result['suggestions'][0]
            else:
                res += ' ' + i
        else:
            print(f"Error Code: {response.errorcode}")

    return res.strip()

    # response = requests.get("https://mora-bot.kr/api/v1/grammar?string=" + content)
    # result = response.json()
    #
    # if result['status'] == 200:
    #     print(result)
    #     if(result['errnum'] > 0) :
    #         print(result['suggestions'][0])
    # else:
    #     print(f"Error Code: {response.errorcode}")


client = openai.OpenAI(api_key='')


def spell_check_gpt(content: str):
    print(content)
    completion = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "사용자가 입력한 문장의 맞춤법을 수정하고, 수정한 문장만 알려줘"},
            {"role": "user", "content": content}
        ]
    )
    print(completion.choices[0].message)
