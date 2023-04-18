import { faker } from "@faker-js/faker";

const list = [
    {
        id: faker.datatype.uuid(),
        company: faker.company.bs(),
        senai_unid: faker.name.firstName(),
        url: faker.image.business()
    },
    {
        id: faker.datatype.uuid(),
        company: faker.company.bsAdjective(),
        senai_unid: faker.name.firstName(),
        url: faker.image.business()
    },
    {
        id: faker.datatype.uuid(),
        company: faker.company.bsBuzz(),
        senai_unid: faker.name.firstName(),
        url: faker.image.business()
    },
    {
        id: faker.datatype.uuid(),
        company: faker.company.bsNoun(),
        senai_unid: faker.name.firstName(),
        url: faker.image.business()
    },
    {
        id: faker.datatype.uuid(),
        company: faker.company.catchPhrase(),
        senai_unid: faker.name.firstName(),
        url: faker.image.business()
    }, 
    {
        id: faker.datatype.uuid(),
        company: faker.company.catchPhraseAdjective(),
        senai_unid: faker.name.firstName(),
        url: faker.image.business()
    },
    {
        id: faker.datatype.uuid(),
        company: faker.company.catchPhraseDescriptor(),
        senai_unid: faker.name.firstName(),
        url: faker.image.business()
    },
    {
        id: faker.datatype.uuid(),
        company:faker.company.catchPhraseNoun(),
        senai_unid: faker.name.firstName(),
        url: faker.image.business()
    },
    {
        id: faker.datatype.uuid(),
        company:faker.company.companySuffix(),
        senai_unid: faker.name.firstName(),
        url: faker.image.business()
    }
]

export function ListAtivos(){
    return (
        <div className="m-9 ">
            <span className="text-3xl font-bold">ATIVOS</span>

            <ul className="rounded-2xl outline outline-offset-1 outline-gray-200 mt-6">{list.map((item) => (
                <li key={item.id} className="h-20 p-2 border-b-2 flex justify-between items-center gap-3 grid-cols-2">
                    <div className="flex">
                        <img className="w-16 h-16 rounded-3xl" src={item.url} alt="" />
                        <div className="ml-3 flex-col justify-between ">
                            <p className="font-semibold text-base font-variant">{item.company} - {item.senai_unid}</p>
                            <p className="pt-4">Mais detalhes</p>
                        </div>
                    </div>
                    <div className="">
                        <button className="h-10 rounded outline outline-offset-1 outline-sky-700 font-bold text-sky-700 px-4 py-3 mr-8">RESERVAR</button>
                    </div>
                </li>
            ))}</ul>
        </div>
    )
}
