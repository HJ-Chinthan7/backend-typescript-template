import dotenv from 'dotenv';
type ServerConfig={
    PORT:number
}


const loadenv = () => {
    dotenv.config();
};

loadenv();

export const serverConfig:ServerConfig={
    PORT:Number(process.env.PORT)||3000
};
