import { Slide } from './application/types';

// export const stories: Slide[] = [
//     { alias: 'slide1', data: { color: 'red', text: 'slide1' } },
//     { alias: 'slide1', data: { color: 'green', text: 'slide2' } },
//     { alias: 'slide1', data: { color: 'blue', text: 'slide3' } },
//     { alias: 'slide2', data: { color: 'white', text: 'slide4' } },
//     { alias: 'slide2', data: { color: 'yellow', text: 'slide5' } },
//     { alias: 'slide2', data: { color: 'brown', text: 'slide6' } },
//     { alias: 'slide2', data: { color: 'coral', text: 'slide7' } },
// ];


export const stories: Slide[] = [
    {
        "alias": "leaders",
        "data": {
            "title": "Больше всего коммитов",
            "subtitle": "Последний вагон",
            "emoji": "👑",
            "users": [
                { "id": 8, "name": "Александр Иванков", "avatar": "8.jpg", "valueText": "28" },
                { "id": 6, "name": "Андрей Мокроусов", "avatar": "6.jpg", "valueText": "21" },
                { "id": 9, "name": "Сергей Бережной", "avatar": "9.jpg", "valueText": "11" },
                { "id": 5, "name": "Александр Николаичев", "avatar": "5.jpg", "valueText": "7" },
                { "id": 11, "name": "Юрий Фролов", "avatar": "11.jpg", "valueText": "7" },
                { "id": 2, "name": "Александр Шлейко", "avatar": "2.jpg", "valueText": "6" },
                { "id": 4, "name": "Вадим Пацев", "avatar": "4.jpg", "valueText": "6" },
                { "id": 12, "name": "Алексей Ярошевич", "avatar": "12.jpg", "valueText": "5" },
                { "id": 3, "name": "Дарья Ковалева", "avatar": "3.jpg", "valueText": "4" },
                { "id": 10, "name": "Яна Берникова", "avatar": "10.jpg", "valueText": "4" },
                { "id": 7, "name": "Дмитрий Андриянов", "avatar": "7.jpg", "valueText": "3" },
                { "id": 1, "name": "Евгений Дементьев", "avatar": "1.jpg", "valueText": "2" }
            ]
        }
    },
    {
        "alias": "vote",
        "data": {
            "title": "Самый 🔎 внимательный разработчик",
            "subtitle": "Последний вагон",
            "emoji": "🔎",
            "users": [
                { "id": 7, "name": "Дмитрий Андриянов", "avatar": "7.jpg", "valueText": "306 голосов" },
                { "id": 8, "name": "Александр Иванков", "avatar": "8.jpg", "valueText": "305 голосов" },
                { "id": 5, "name": "Александр Николаичев", "avatar": "5.jpg", "valueText": "284 голоса" },
                { "id": 4, "name": "Вадим Пацев", "avatar": "4.jpg", "valueText": "273 голоса" },
                { "id": 1, "name": "Евгений Дементьев", "avatar": "1.jpg", "valueText": "270 голосов" },
                { "id": 6, "name": "Андрей Мокроусов", "avatar": "6.jpg", "valueText": "264 голоса" },
                { "id": 2, "name": "Александр Шлейко", "avatar": "2.jpg", "valueText": "242 голоса" },
                { "id": 11, "name": "Юрий Фролов", "avatar": "11.jpg", "valueText": "224 голоса" },
                { "id": 9, "name": "Сергей Бережной", "avatar": "9.jpg", "valueText": "219 голосов" },
                { "id": 3, "name": "Дарья Ковалева", "avatar": "3.jpg", "valueText": "216 голосов" },
                { "id": 10, "name": "Яна Берникова", "avatar": "10.jpg", "valueText": "212 голосов" },
                { "id": 12, "name": "Алексей Ярошевич", "avatar": "12.jpg", "valueText": "210 голосов" }
            ]
        }
    },
    {
        "alias": "chart",
        "data": {
            "title": "Коммиты",
            "subtitle": "Последний вагон",
            "values": [
                { "title": "958", "hint": "Февральская лазурь", "value": 460 },
                { "title": "959", "hint": "Новый год", "value": 209 },
                { "title": "960", "hint": "Новый код", "value": 288 },
                { "title": "961", "hint": "Послевкусие", "value": 258 },
                { "title": "962", "hint": "С днем мужика!", "value": 152 },
                { "title": "963", "hint": "Новый спринт", "value": 249 },
                { "title": "964", "hint": "Феечки на единорогах", "value": 249 },
                { "title": "965", "hint": "Раздача долгов", "value": 446 },
                { "title": "966", "hint": "Три плюс два", "value": 477 },
                { "title": "967", "hint": "Майские праздники", "value": 707 },
                { "title": "968", "hint": "Следующий", "value": 475 },
                { "title": "969", "hint": "Тополиный пух", "value": 655 },
                { "title": "970", "hint": "Жара", "value": 354 },
                { "title": "971", "hint": "Репка", "value": 253 },
                { "title": "972", "hint": "Рисуем сову", "value": 233 },
                { "title": "973", "hint": "Два места", "value": 170 },
                { "title": "974", "hint": "Девятый вал", "value": 182 },
                { "title": "975", "hint": "Лето все", "value": 160 },
                { "title": "976", "hint": "Снова в школу", "value": 210 },
                { "title": "977", "hint": "Последний вагон", "value": 104, "active": true },
                { "title": "978", "hint": "Премьера сезона", "value": 117 },
                { "title": "979", "hint": "Осенняя пора", "value": 122 },
                { "title": "980", "hint": "Маша, с днем рождения!", "value": 85 },
                { "title": "981", "hint": "Новая колея", "value": 90 },
                { "title": "982", "hint": "F5", "value": 123 },
                { "title": "983", "hint": "Пушной зверек", "value": 129 },
                { "title": "984", "hint": "Розовый слон", "value": 120 },
                { "title": "985", "hint": "Весна и женщины", "value": 173 },
                { "title": "986", "hint": "Третий с конца", "value": 122 },
                { "title": "987", "hint": "Смирение", "value": 126 },
                { "title": "988", "hint": "Новогодний затяжной", "value": 131 },
                { "title": "989", "hint": "Листопад", "value": 119 },
                { "title": "990", "hint": "Арбузики", "value": 79 },
                { "title": "991", "hint": "Короткий Крот", "value": 28 },
                { "title": "992", "hint": "Карантин", "value": 0 },
                { "title": "993", "hint": "Сдаем хвосты", "value": 0 },
                { "title": "994", "hint": "Красный", "value": 0 },
                { "title": "995", "hint": "Салатики", "value": 0 },
                { "title": "996", "hint": "Бармалей", "value": 0 }
            ],
            "users": [
                { "id": 8, "name": "Александр Иванков", "avatar": "8.jpg", "valueText": "28" },
                { "id": 6, "name": "Андрей Мокроусов", "avatar": "6.jpg", "valueText": "21" },
                { "id": 9, "name": "Сергей Бережной", "avatar": "9.jpg", "valueText": "11" },
                { "id": 5, "name": "Александр Николаичев", "avatar": "5.jpg", "valueText": "7" },
                { "id": 11, "name": "Юрий Фролов", "avatar": "11.jpg", "valueText": "7" },
                { "id": 2, "name": "Александр Шлейко", "avatar": "2.jpg", "valueText": "6" },
                { "id": 4, "name": "Вадим Пацев", "avatar": "4.jpg", "valueText": "6" },
                { "id": 12, "name": "Алексей Ярошевич", "avatar": "12.jpg", "valueText": "5" },
                { "id": 3, "name": "Дарья Ковалева", "avatar": "3.jpg", "valueText": "4" },
                { "id": 10, "name": "Яна Берникова", "avatar": "10.jpg", "valueText": "4" },
                { "id": 7, "name": "Дмитрий Андриянов", "avatar": "7.jpg", "valueText": "3" },
                { "id": 1, "name": "Евгений Дементьев", "avatar": "1.jpg", "valueText": "2" }
            ]
        }
    },
    {
        "alias": "diagram",
        "data": {
            "title": "Размер коммитов",
            "subtitle": "Последний вагон",
            "totalText": "104 коммита",
            "differenceText": "-106 с прошлого спринта",
            "categories": [
                { "title": "> 1001 строки", "valueText": "2 коммита", "differenceText": "-3 коммита" },
                { "title": "501 — 1000 строк", "valueText": "3 коммита", "differenceText": "-3 коммита" },
                { "title": "101 — 500 строк", "valueText": "13 коммитов", "differenceText": "-22 коммита" },
                { "title": "1 — 100 строк", "valueText": "86 коммитов", "differenceText": "-78 коммитов" }
            ]
        }
    },
    // {
    //     "alias": "activity",
    //     "data": {
    //         "title": "Коммиты",
    //         "subtitle": "Последний вагон",
    //         "data": {
    //             "sun": [0, 2, 1, 1, 1, 1, 1, 2, 0, 1, 1, 2, 4, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
    //             "mon": [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 11, 0, 0, 0, 0, 0],
    //             "tue": [0, 0, 0, 3, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 4, 1, 0, 0],
    //             "wed": [0, 0, 4, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 2, 0, 0, 0, 3, 1, 1, 1, 1, 1],
    //             "thu": [0, 0, 6, 2, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0],
    //             "fri": [0, 0, 4, 0, 1, 0, 0, 3, 1, 0, 3, 1, 1, 4, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2],
    //             "sat": [0, 0, 0, 0, 0, 3, 0, 0, 0, 6, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0]
    //         }
    //     }
    // }
];