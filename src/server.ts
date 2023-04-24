import { Model, createServer } from "miragejs";
import { v4 as uuid } from "uuid";

export interface UserResponse {
    token: string;
    user_identify: {
        name: string;
        email: string;
        avatar_url: string;
    }
}

export function makeServer({ environment = "test"}){
    return createServer({
        environment,
        models: {
            user: Model
        },
        seeds(server) {
            server.db.loadData({
                users: [
                    {
                        token: uuid(),
                        user_identify: {
                            name: "Natália Lima de Oliveira",
                            email: "natalia.oliveira@sp.senai.br",
                            avatar_url: "https://avatars.githubusercontent.com/u/67019361?v=4"
                        } 
                    },
                    {
                        token: uuid(),
                        user_identify: {
                            name: "Lucas Dittrich",
                            email: "lucas.dittrich@sp.senai.br",
                            avatar_url: "https://avatars.githubusercontent.com/u/103198948?v=4"
                        }
                    },
                    {
                        token: uuid(),
                        user_identify: {
                            name: "Vinicius Piovezan",
                            email: "vinicius.piovezan@sp.senai.br",
                            avatar_url: "https://avatars.githubusercontent.com/u/69124491?v=4"
                        }
                    },
                    {
                        token: uuid(),
                        user_identify: {
                            name: "Henrique Almeida",
                            email: "henrique.nogueira@sp.senai.br",
                            avatar_url: "https://avatars.githubusercontent.com/u/67699149?v=4"
                        }
                    },
                    {
                        token: uuid(),
                        user_identify: {
                            name: "Isabele Louraina Lima da Silva",
                            email: "isabele.silva@sesisenaisp.org.br",
                            avatar_url: "https://media.licdn.com/dms/image/D4D03AQEP4Hias4G7uw/profile-displayphoto-shrink_400_400/0/1679355332687?e=1687996800&v=beta&t=u458m_QuIJlwFha3kn-NmzsABQUrVeaUX3NJgb6DMJE"
                        }
                    }
                ]
            })
        },
        routes() {
            this.namespace = "api"
            
            this.resource("user")
            
            this.post("/authenticate_user", (schema, request) => {
                const { email, password } = JSON.parse(request.requestBody);
                if(email === "natalia.oliveira@sp.senai.br" && password === "my#pass" ){
                    const data_user = schema.db.users.where((user: UserResponse) => user.user_identify.email === "natalia.oliveira@sp.senai.br")
                    //console.log(data_user)
                    return data_user
                } else {
                    return { error: 'E-mail ou senha inválidos'}
                }
            });

            this.get("/user", (schema, request) => {
                return schema.db.users
            })
        },
    })
}