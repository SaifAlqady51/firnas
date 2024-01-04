import { Arrow } from "./arrow";
import { APIBox } from "./box";

type Props = {
    inputList: string[];
    outputList: string[];
};

export const Endpoint = ({ inputList, outputList }: Props) => {
    return (
        <div className="relative my-20  flex h-fit flex-col items-center md:flex-row">
            <div className="mr-4 flex w-44 flex-col items-center justify-center text-xl">
                {inputList.map((sentence: string) => (
                    <p key={inputList.indexOf(sentence)}>{sentence}</p>
                ))}
            </div>
            <Arrow />
            <APIBox />
            <Arrow />
            <div className="ml-4 flex  w-44 flex-col text-xl">
                <p>&#123;</p>

                {outputList.map((sentence: string) => (
                    <p className="ml-4" key={outputList.indexOf(sentence)}>
                        {sentence}
                    </p>
                ))}
                <p>&#125;</p>
            </div>
        </div>
    );
};
