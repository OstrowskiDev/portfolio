export default function ArticleCard() {
  return (
    <div className="article border-b flex flex-row w-full h-[140px] p-4 border-primary-300">
      <div className="article-iconography w-2 border-r-[3px] border-primary-300"></div>
      <div className="article-container flex flex-col ml-4">
        <div className="article-tag uppercase text-accent-700 text-xs font-bold tracking-[0.5px]">
          next.js
        </div>
        <div className="article-title font-bold mt-1 text-primary-950 text-lg">
          Static rebuilds triggered by CMS webhooks
        </div>
        <div className="article-content-abr text-sm mt-1 text-primary-500 font-semibold leading-[1.55]">
          Use some smart parser for that. Or even better add article.description
          and pass data there for full control and no weird stuff happening.
        </div>
      </div>
      <div className="article-metadata flex flex-col justify-center items-end w-[180px] ml-2">
        <div className="article-creation-data text-sm text-primary-400 font-semibold">
          12 Lip 2026
        </div>
        <div className="article-read-time text-sm text-primary-400 font-semibold">
          4 min
        </div>
      </div>
    </div>
  )
}
