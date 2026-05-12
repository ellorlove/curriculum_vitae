import { Fragment } from "react/jsx-runtime"
import { v4 as uuidv4} from 'uuid'
import { withFetchedData } from "./withFetchData"
import { withInfoBlock } from "./withInfoBlock"
import { withListView } from "./withListView"

interface Language {
    language : string,
    level : string
}

const LanguageItem = ({
    language, 
    level
} : Language) => {

    return(
        <div className="flex justify-between my-4">
            <h2 className="text-lg">{language}</h2>
            <div>{level}</div>
        </div>
    )
}

const LanguageView = withListView(LanguageItem, '')

const WrappedLanguages = withFetchedData(
    LanguageView,
    '/data/language.json'
)

export const LanguageBlock = withInfoBlock(WrappedLanguages, 'Languages')