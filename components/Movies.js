import Thumbnail from './Thumbnail'
function Movies({ results }) {
    return (
        <div>
            {
                results.map(result => (
                    <Thumbnail key={result.id} result={result} />
                ))
            }

        </div>
    )
}

export default Movies
