import { faker } from "@faker-js/faker";
import { AccordionItem } from "../AccordionItem";

export interface AtivoProps {
    id: string;
    company: string;
    senai_unid: string;
    url: string;
}
const list_ativos = [
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

export function Accordion(){
    const ativos = list_ativos.map((ativo: AtivoProps) => {
        return (
            <AccordionItem
                key={ativo.id}
                id={ativo.id}
                company={ativo.company}
                senai_unid={ativo.senai_unid}
                url={ativo.url}
            />
        )
    })
    return (
        <div className="m-9">
            <dl>{ativos}</dl>
        </div>
    )
}