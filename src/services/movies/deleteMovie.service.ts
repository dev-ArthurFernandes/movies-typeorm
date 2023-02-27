import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { Movies } from "../../entities"


const deleteMovieService =async (id: number): Promise<void> => {
    
    const moviesRepository: Repository<Movies> = AppDataSource.getRepository(Movies)

    const movie = await moviesRepository.findOne({
        where: {
            id: id
        }
    })

    await moviesRepository.remove(movie!)
}

export default deleteMovieService