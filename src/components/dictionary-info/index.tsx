import { type } from "os"
import { space } from "postcss/lib/list"

type Definition = {
  definition: string;
  synonyms: string[];
  antonyms: string[];
}

type DictionaryInfoProps = {
  partOfSpeech: string;
  definitions: Definition[];
  synonyms: string[];
}

export default function DictionaryInfo({
  partOfSpeech, definitions, synonyms
}: DictionaryInfoProps) {
  return (
    <section>
      <span>{partOfSpeech}</span>
      <p>Meanings</p>
      <ul>
        {definitions.map((definition, index) => (
          <li key={index}>{definition.definition}</li>
        ))}
      </ul>
      <p>Synonyms</p>
      {synonyms.map((synonym, index) => (
        <span key={index}>{synonym}</span>
      ))}
    </section>
  )
}