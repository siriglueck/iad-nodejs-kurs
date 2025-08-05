// Mischen von Named und Default-Export in der Regel not best practice
export const VERSION = "1.0";

export function printVersion() {console.log(VERSION)};

export default function () {
    console.log("Ich bin der Default-Export");
}