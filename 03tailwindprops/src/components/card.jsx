import React from 'react';
function Card({username="Guest",add="Tailwind CSS"}) {
    console.log("Props:",username,add);
    
    return (
        <>
            <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
                <img className="w-24 h-24 rounded-full mx-auto" src="https://v3.tailwindcss.com/_next/static/media/sarah-dayan.de9b3815.jpg" alt="" width="384" height="512" />
                <div className="pt-6 space-y-4">
                    <blockquote>
                        <p className="text-lg">
                            “Tailwind CSS is the only framework that I've seen scale
                            on large teams. It’s easy to customize, adapts to any design,
                            and the build size is tiny.”
                        </p>
                    </blockquote>
                    <figcaption>
                        <div>
                            {username}
                        </div>
                        <div>
                            {add}
                        </div>
                    </figcaption>
                </div>
            </figure>
        </>
    )
}

export default Card;