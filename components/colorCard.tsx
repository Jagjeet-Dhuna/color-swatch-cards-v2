import { lock, unlock } from "lucid-react";
type ColorCardProp = {
    hexCode: string;
    isLarge?: boolean;
    isLocked?: boolean;
    id: string;
};

export default function ColorCard({id, hexCode, isLarge = false, isLocked = false }: ColorCardProp) {
    return (
        <div
        id={`color-card-${id}`}
        className={`${isLarge ? 'h-[495px]' : 'h-52 my-2'} w-full border-8 border-white rounded-3xl overflow-hidden drop-shadow-lg bg-white`}
        > 
            <div className="h-[85%] rounded-b-3xl rounded-t-lg mb-2" style={{ backgroundColor: hexCode }}>
            {/* Color Display Area */}
            </div>
            {/* hex Display Area */}
            <div className="h-[10%] bg-white flex items-center justify-center">
                <p className={`${isLarge ? 'text-2xl' : 'text-sm'} text-center font-mono`}>
                    {hexCode}
                </p>
            </div>
        </div>
    );
}