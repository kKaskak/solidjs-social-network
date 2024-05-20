import { For } from 'solid-js';

const randomGlideCount = () => Math.floor(Math.random() * 1000);
const trends = [
    {
        category: 'Sports',
        content: 'Some team won something',
        glideCount: randomGlideCount()
    },
    {
        category: 'Economy',
        content: 'Some company went bankrupt',
        glideCount: randomGlideCount()
    },
    {
        category: 'Celebrities',
        content: 'Peter Dinklage is a great actor',
        glideCount: randomGlideCount()
    },
    {
        category: 'Series',
        content: 'New season of some series is out',
        glideCount: randomGlideCount()
    },
    {
        category: 'Movies',
        content: 'Some movie won an award',
        glideCount: randomGlideCount()
    },
];

const TrendsSidebar = () => {
    return (
        <div class='bg-gray-800 overflow-hidden flex-it rounded-2xl'>
            <div class='flex-it p-4'>
                <span class='text-xl font-bold'>Trends</span>
            </div>
            <For each={trends}>
                {(trend) => (
                    <div class='flex-it p-4 cursor-pointer transition duration-200 hover:bg-gray-700'>
                        <div class='flex-it'>
                            <span class='text-gray-400 text-sm'>
                                {trend.category}
                            </span>
                            <span class='text-lg font-bold'>{trend.content}</span>
                            <span class='text-gray-400 text-sm'>{trend.glideCount} glides</span>
                        </div>
                    </div>
                )}
            </For>
        </div>
    );
}


export default TrendsSidebar;