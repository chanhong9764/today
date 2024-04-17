import requests

def spell_check(content: str):
    s = content.split(' ')
    res = ''

    for i in s:
        response = requests.get("https://mora-bot.kr/api/v1/grammar?string=" + i)
        result = response.json()

        if(result['status'] == 200) :
            if(result['errnum'] > 0) :
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

# def spell_check_gpt(content: str):
