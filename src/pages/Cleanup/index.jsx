import { useEffect, useState } from "react";

function Cleanup() {
    const [counter, setCounter] = useState(0);
    useEffect(() => {
        const handle = () => {
            console.log(window.scrollY);
            setCounter(window.screenY);
        };

        document.addEventListener("scroll", handle);

        // Cleanup
        // - Duoc goi trong 2 truong hop:
        // 1. Khi component re-render, neu co bat ky deps
        // thay doi. Duoc goi truoc khi goi callback luot moi.
        // 2. Ngay truoc khi component unmount
        return () => {
            console.log("Cleanup");
            document.removeEventListener("scroll", handle);
        };
    }, [counter]);
    return (
        <div>
            <button onClick={() => setCounter(counter + 1)}>
                Counter is {counter}
            </button>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                sed maxime corporis. Exercitationem quo et dolor quaerat
                quibusdam veniam nostrum consectetur reiciendis architecto sequi
                voluptas pariatur, itaque ut error tempore at quasi dignissimos,
                porro delectus fuga rem! Quaerat illum tempore sit eligendi quo
                consectetur atque, sed dolor quidem dolore. Recusandae provident
                corporis facere! Labore modi necessitatibus cupiditate id rem
                maiores obcaecati placeat sapiente aspernatur repudiandae. Esse
                nam laborum earum natus eveniet eius explicabo omnis molestiae
                incidunt architecto voluptatem rerum eos, repellendus nemo
                laboriosam nihil aliquam accusamus culpa! Suscipit ut qui libero
                tempora quam fugit eum, dicta maiores reiciendis dolores
                debitis?
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                sed maxime corporis. Exercitationem quo et dolor quaerat
                quibusdam veniam nostrum consectetur reiciendis architecto sequi
                voluptas pariatur, itaque ut error tempore at quasi dignissimos,
                porro delectus fuga rem! Quaerat illum tempore sit eligendi quo
                consectetur atque, sed dolor quidem dolore. Recusandae provident
                corporis facere! Labore modi necessitatibus cupiditate id rem
                maiores obcaecati placeat sapiente aspernatur repudiandae. Esse
                nam laborum earum natus eveniet eius explicabo omnis molestiae
                incidunt architecto voluptatem rerum eos, repellendus nemo
                laboriosam nihil aliquam accusamus culpa! Suscipit ut qui libero
                tempora quam fugit eum, dicta maiores reiciendis dolores
                debitis?
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                sed maxime corporis. Exercitationem quo et dolor quaerat
                quibusdam veniam nostrum consectetur reiciendis architecto sequi
                voluptas pariatur, itaque ut error tempore at quasi dignissimos,
                porro delectus fuga rem! Quaerat illum tempore sit eligendi quo
                consectetur atque, sed dolor quidem dolore. Recusandae provident
                corporis facere! Labore modi necessitatibus cupiditate id rem
                maiores obcaecati placeat sapiente aspernatur repudiandae. Esse
                nam laborum earum natus eveniet eius explicabo omnis molestiae
                incidunt architecto voluptatem rerum eos, repellendus nemo
                laboriosam nihil aliquam accusamus culpa! Suscipit ut qui libero
                tempora quam fugit eum, dicta maiores reiciendis dolores
                debitis?
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                sed maxime corporis. Exercitationem quo et dolor quaerat
                quibusdam veniam nostrum consectetur reiciendis architecto sequi
                voluptas pariatur, itaque ut error tempore at quasi dignissimos,
                porro delectus fuga rem! Quaerat illum tempore sit eligendi quo
                consectetur atque, sed dolor quidem dolore. Recusandae provident
                corporis facere! Labore modi necessitatibus cupiditate id rem
                maiores obcaecati placeat sapiente aspernatur repudiandae. Esse
                nam laborum earum natus eveniet eius explicabo omnis molestiae
                incidunt architecto voluptatem rerum eos, repellendus nemo
                laboriosam nihil aliquam accusamus culpa! Suscipit ut qui libero
                tempora quam fugit eum, dicta maiores reiciendis dolores
                debitis?
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                sed maxime corporis. Exercitationem quo et dolor quaerat
                quibusdam veniam nostrum consectetur reiciendis architecto sequi
                voluptas pariatur, itaque ut error tempore at quasi dignissimos,
                porro delectus fuga rem! Quaerat illum tempore sit eligendi quo
                consectetur atque, sed dolor quidem dolore. Recusandae provident
                corporis facere! Labore modi necessitatibus cupiditate id rem
                maiores obcaecati placeat sapiente aspernatur repudiandae. Esse
                nam laborum earum natus eveniet eius explicabo omnis molestiae
                incidunt architecto voluptatem rerum eos, repellendus nemo
                laboriosam nihil aliquam accusamus culpa! Suscipit ut qui libero
                tempora quam fugit eum, dicta maiores reiciendis dolores
                debitis?
            </p>
        </div>
    );
}

export default Cleanup;
