import { DictionaryInfo } from "@/types";

export default function DictionaryInfo({
  partOfSpeech, definitions, synonyms
}: DictionaryInfo) {
  return (
    <section className="mb-8">
      <div className="flex items-center gap-x-2 mb-8">
        <span className="font-bold">{partOfSpeech}</span>
        <div className="bg-gray-400 w-full h-[1px]"></div>
      </div>
      <p className="text-[rgb(153, 153, 153)] opacity-40 mb-8">Meanings</p>
      <ul className="list-disc marker:text-blue-700 marker:text-2xl mb-8 ml-6">
        {definitions.map((definition, index) => (
          <li key={index} className="mb-2">{definition.definition}</li>
        ))}
      </ul>
      <p className="text-[rgb(153, 153, 153)] opacity-40 mb-8 inline">Synonyms</p>
      {synonyms.map((synonym, index) => (
        <span className="text-blue-700 ml-4"key={index}>{synonym}</span>
      
      ))}
    </section>
  )
}