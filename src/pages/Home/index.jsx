import { useState } from "react";
import Modal from "../../components/Modal";

function Home() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <button onClick={() => setIsOpen(true)}>Open Modal</button>
            <button onClick={() => setIsOpen(false)}>Close Modal</button>

            {isOpen && (
                <Modal
                    closeTimeoutMS={3000}
                    isOpen
                    onRequestClose={() => setIsOpen(false)}
                    overlayClassName={"abc"}
                    bodyOpenClassName="modal-custom-body"
                >
                    <h2>Register</h2>
                    <form action="">
                        <input type="text" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <button>Register</button>
                    </form>
                </Modal>
            )}

            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure
                est exercitationem reprehenderit quae accusamus, expedita,
                dolores deserunt debitis officiis doloribus, eos vero. Ullam
                suscipit eius dolorum dolores rerum quaerat libero modi omnis
                dolore laborum. Quam fuga fugiat, voluptate deleniti rem beatae.
                Dignissimos facere animi corporis! Doloremque ducimus quas
                architecto mollitia quae qui dignissimos reprehenderit assumenda
                ullam eveniet quisquam illo facilis ab sint, hic illum.
                Quibusdam maiores saepe quisquam. Ipsam illo aperiam libero cum,
                labore, dolore doloribus dolorem quibusdam culpa rem consequatur
                accusantium veritatis! Labore doloribus quidem libero id iste
                dignissimos, fugiat nam laboriosam doloremque saepe ex minus
                esse molestiae! Quod?
            </p>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure
                est exercitationem reprehenderit quae accusamus, expedita,
                dolores deserunt debitis officiis doloribus, eos vero. Ullam
                suscipit eius dolorum dolores rerum quaerat libero modi omnis
                dolore laborum. Quam fuga fugiat, voluptate deleniti rem beatae.
                Dignissimos facere animi corporis! Doloremque ducimus quas
                architecto mollitia quae qui dignissimos reprehenderit assumenda
                ullam eveniet quisquam illo facilis ab sint, hic illum.
                Quibusdam maiores saepe quisquam. Ipsam illo aperiam libero cum,
                labore, dolore doloribus dolorem quibusdam culpa rem consequatur
                accusantium veritatis! Labore doloribus quidem libero id iste
                dignissimos, fugiat nam laboriosam doloremque saepe ex minus
                esse molestiae! Quod?
            </p>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure
                est exercitationem reprehenderit quae accusamus, expedita,
                dolores deserunt debitis officiis doloribus, eos vero. Ullam
                suscipit eius dolorum dolores rerum quaerat libero modi omnis
                dolore laborum. Quam fuga fugiat, voluptate deleniti rem beatae.
                Dignissimos facere animi corporis! Doloremque ducimus quas
                architecto mollitia quae qui dignissimos reprehenderit assumenda
                ullam eveniet quisquam illo facilis ab sint, hic illum.
                Quibusdam maiores saepe quisquam. Ipsam illo aperiam libero cum,
                labore, dolore doloribus dolorem quibusdam culpa rem consequatur
                accusantium veritatis! Labore doloribus quidem libero id iste
                dignissimos, fugiat nam laboriosam doloremque saepe ex minus
                esse molestiae! Quod?
            </p>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure
                est exercitationem reprehenderit quae accusamus, expedita,
                dolores deserunt debitis officiis doloribus, eos vero. Ullam
                suscipit eius dolorum dolores rerum quaerat libero modi omnis
                dolore laborum. Quam fuga fugiat, voluptate deleniti rem beatae.
                Dignissimos facere animi corporis! Doloremque ducimus quas
                architecto mollitia quae qui dignissimos reprehenderit assumenda
                ullam eveniet quisquam illo facilis ab sint, hic illum.
                Quibusdam maiores saepe quisquam. Ipsam illo aperiam libero cum,
                labore, dolore doloribus dolorem quibusdam culpa rem consequatur
                accusantium veritatis! Labore doloribus quidem libero id iste
                dignissimos, fugiat nam laboriosam doloremque saepe ex minus
                esse molestiae! Quod?
            </p>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure
                est exercitationem reprehenderit quae accusamus, expedita,
                dolores deserunt debitis officiis doloribus, eos vero. Ullam
                suscipit eius dolorum dolores rerum quaerat libero modi omnis
                dolore laborum. Quam fuga fugiat, voluptate deleniti rem beatae.
                Dignissimos facere animi corporis! Doloremque ducimus quas
                architecto mollitia quae qui dignissimos reprehenderit assumenda
                ullam eveniet quisquam illo facilis ab sint, hic illum.
                Quibusdam maiores saepe quisquam. Ipsam illo aperiam libero cum,
                labore, dolore doloribus dolorem quibusdam culpa rem consequatur
                accusantium veritatis! Labore doloribus quidem libero id iste
                dignissimos, fugiat nam laboriosam doloremque saepe ex minus
                esse molestiae! Quod?
            </p>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure
                est exercitationem reprehenderit quae accusamus, expedita,
                dolores deserunt debitis officiis doloribus, eos vero. Ullam
                suscipit eius dolorum dolores rerum quaerat libero modi omnis
                dolore laborum. Quam fuga fugiat, voluptate deleniti rem beatae.
                Dignissimos facere animi corporis! Doloremque ducimus quas
                architecto mollitia quae qui dignissimos reprehenderit assumenda
                ullam eveniet quisquam illo facilis ab sint, hic illum.
                Quibusdam maiores saepe quisquam. Ipsam illo aperiam libero cum,
                labore, dolore doloribus dolorem quibusdam culpa rem consequatur
                accusantium veritatis! Labore doloribus quidem libero id iste
                dignissimos, fugiat nam laboriosam doloremque saepe ex minus
                esse molestiae! Quod?
            </p>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure
                est exercitationem reprehenderit quae accusamus, expedita,
                dolores deserunt debitis officiis doloribus, eos vero. Ullam
                suscipit eius dolorum dolores rerum quaerat libero modi omnis
                dolore laborum. Quam fuga fugiat, voluptate deleniti rem beatae.
                Dignissimos facere animi corporis! Doloremque ducimus quas
                architecto mollitia quae qui dignissimos reprehenderit assumenda
                ullam eveniet quisquam illo facilis ab sint, hic illum.
                Quibusdam maiores saepe quisquam. Ipsam illo aperiam libero cum,
                labore, dolore doloribus dolorem quibusdam culpa rem consequatur
                accusantium veritatis! Labore doloribus quidem libero id iste
                dignissimos, fugiat nam laboriosam doloremque saepe ex minus
                esse molestiae! Quod?
            </p>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure
                est exercitationem reprehenderit quae accusamus, expedita,
                dolores deserunt debitis officiis doloribus, eos vero. Ullam
                suscipit eius dolorum dolores rerum quaerat libero modi omnis
                dolore laborum. Quam fuga fugiat, voluptate deleniti rem beatae.
                Dignissimos facere animi corporis! Doloremque ducimus quas
                architecto mollitia quae qui dignissimos reprehenderit assumenda
                ullam eveniet quisquam illo facilis ab sint, hic illum.
                Quibusdam maiores saepe quisquam. Ipsam illo aperiam libero cum,
                labore, dolore doloribus dolorem quibusdam culpa rem consequatur
                accusantium veritatis! Labore doloribus quidem libero id iste
                dignissimos, fugiat nam laboriosam doloremque saepe ex minus
                esse molestiae! Quod?
            </p>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure
                est exercitationem reprehenderit quae accusamus, expedita,
                dolores deserunt debitis officiis doloribus, eos vero. Ullam
                suscipit eius dolorum dolores rerum quaerat libero modi omnis
                dolore laborum. Quam fuga fugiat, voluptate deleniti rem beatae.
                Dignissimos facere animi corporis! Doloremque ducimus quas
                architecto mollitia quae qui dignissimos reprehenderit assumenda
                ullam eveniet quisquam illo facilis ab sint, hic illum.
                Quibusdam maiores saepe quisquam. Ipsam illo aperiam libero cum,
                labore, dolore doloribus dolorem quibusdam culpa rem consequatur
                accusantium veritatis! Labore doloribus quidem libero id iste
                dignissimos, fugiat nam laboriosam doloremque saepe ex minus
                esse molestiae! Quod?
            </p>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure
                est exercitationem reprehenderit quae accusamus, expedita,
                dolores deserunt debitis officiis doloribus, eos vero. Ullam
                suscipit eius dolorum dolores rerum quaerat libero modi omnis
                dolore laborum. Quam fuga fugiat, voluptate deleniti rem beatae.
                Dignissimos facere animi corporis! Doloremque ducimus quas
                architecto mollitia quae qui dignissimos reprehenderit assumenda
                ullam eveniet quisquam illo facilis ab sint, hic illum.
                Quibusdam maiores saepe quisquam. Ipsam illo aperiam libero cum,
                labore, dolore doloribus dolorem quibusdam culpa rem consequatur
                accusantium veritatis! Labore doloribus quidem libero id iste
                dignissimos, fugiat nam laboriosam doloremque saepe ex minus
                esse molestiae! Quod?
            </p>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure
                est exercitationem reprehenderit quae accusamus, expedita,
                dolores deserunt debitis officiis doloribus, eos vero. Ullam
                suscipit eius dolorum dolores rerum quaerat libero modi omnis
                dolore laborum. Quam fuga fugiat, voluptate deleniti rem beatae.
                Dignissimos facere animi corporis! Doloremque ducimus quas
                architecto mollitia quae qui dignissimos reprehenderit assumenda
                ullam eveniet quisquam illo facilis ab sint, hic illum.
                Quibusdam maiores saepe quisquam. Ipsam illo aperiam libero cum,
                labore, dolore doloribus dolorem quibusdam culpa rem consequatur
                accusantium veritatis! Labore doloribus quidem libero id iste
                dignissimos, fugiat nam laboriosam doloremque saepe ex minus
                esse molestiae! Quod?
            </p>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure
                est exercitationem reprehenderit quae accusamus, expedita,
                dolores deserunt debitis officiis doloribus, eos vero. Ullam
                suscipit eius dolorum dolores rerum quaerat libero modi omnis
                dolore laborum. Quam fuga fugiat, voluptate deleniti rem beatae.
                Dignissimos facere animi corporis! Doloremque ducimus quas
                architecto mollitia quae qui dignissimos reprehenderit assumenda
                ullam eveniet quisquam illo facilis ab sint, hic illum.
                Quibusdam maiores saepe quisquam. Ipsam illo aperiam libero cum,
                labore, dolore doloribus dolorem quibusdam culpa rem consequatur
                accusantium veritatis! Labore doloribus quidem libero id iste
                dignissimos, fugiat nam laboriosam doloremque saepe ex minus
                esse molestiae! Quod?
            </p>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure
                est exercitationem reprehenderit quae accusamus, expedita,
                dolores deserunt debitis officiis doloribus, eos vero. Ullam
                suscipit eius dolorum dolores rerum quaerat libero modi omnis
                dolore laborum. Quam fuga fugiat, voluptate deleniti rem beatae.
                Dignissimos facere animi corporis! Doloremque ducimus quas
                architecto mollitia quae qui dignissimos reprehenderit assumenda
                ullam eveniet quisquam illo facilis ab sint, hic illum.
                Quibusdam maiores saepe quisquam. Ipsam illo aperiam libero cum,
                labore, dolore doloribus dolorem quibusdam culpa rem consequatur
                accusantium veritatis! Labore doloribus quidem libero id iste
                dignissimos, fugiat nam laboriosam doloremque saepe ex minus
                esse molestiae! Quod?
            </p>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure
                est exercitationem reprehenderit quae accusamus, expedita,
                dolores deserunt debitis officiis doloribus, eos vero. Ullam
                suscipit eius dolorum dolores rerum quaerat libero modi omnis
                dolore laborum. Quam fuga fugiat, voluptate deleniti rem beatae.
                Dignissimos facere animi corporis! Doloremque ducimus quas
                architecto mollitia quae qui dignissimos reprehenderit assumenda
                ullam eveniet quisquam illo facilis ab sint, hic illum.
                Quibusdam maiores saepe quisquam. Ipsam illo aperiam libero cum,
                labore, dolore doloribus dolorem quibusdam culpa rem consequatur
                accusantium veritatis! Labore doloribus quidem libero id iste
                dignissimos, fugiat nam laboriosam doloremque saepe ex minus
                esse molestiae! Quod?
            </p>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure
                est exercitationem reprehenderit quae accusamus, expedita,
                dolores deserunt debitis officiis doloribus, eos vero. Ullam
                suscipit eius dolorum dolores rerum quaerat libero modi omnis
                dolore laborum. Quam fuga fugiat, voluptate deleniti rem beatae.
                Dignissimos facere animi corporis! Doloremque ducimus quas
                architecto mollitia quae qui dignissimos reprehenderit assumenda
                ullam eveniet quisquam illo facilis ab sint, hic illum.
                Quibusdam maiores saepe quisquam. Ipsam illo aperiam libero cum,
                labore, dolore doloribus dolorem quibusdam culpa rem consequatur
                accusantium veritatis! Labore doloribus quidem libero id iste
                dignissimos, fugiat nam laboriosam doloremque saepe ex minus
                esse molestiae! Quod?
            </p>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure
                est exercitationem reprehenderit quae accusamus, expedita,
                dolores deserunt debitis officiis doloribus, eos vero. Ullam
                suscipit eius dolorum dolores rerum quaerat libero modi omnis
                dolore laborum. Quam fuga fugiat, voluptate deleniti rem beatae.
                Dignissimos facere animi corporis! Doloremque ducimus quas
                architecto mollitia quae qui dignissimos reprehenderit assumenda
                ullam eveniet quisquam illo facilis ab sint, hic illum.
                Quibusdam maiores saepe quisquam. Ipsam illo aperiam libero cum,
                labore, dolore doloribus dolorem quibusdam culpa rem consequatur
                accusantium veritatis! Labore doloribus quidem libero id iste
                dignissimos, fugiat nam laboriosam doloremque saepe ex minus
                esse molestiae! Quod?
            </p>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure
                est exercitationem reprehenderit quae accusamus, expedita,
                dolores deserunt debitis officiis doloribus, eos vero. Ullam
                suscipit eius dolorum dolores rerum quaerat libero modi omnis
                dolore laborum. Quam fuga fugiat, voluptate deleniti rem beatae.
                Dignissimos facere animi corporis! Doloremque ducimus quas
                architecto mollitia quae qui dignissimos reprehenderit assumenda
                ullam eveniet quisquam illo facilis ab sint, hic illum.
                Quibusdam maiores saepe quisquam. Ipsam illo aperiam libero cum,
                labore, dolore doloribus dolorem quibusdam culpa rem consequatur
                accusantium veritatis! Labore doloribus quidem libero id iste
                dignissimos, fugiat nam laboriosam doloremque saepe ex minus
                esse molestiae! Quod?
            </p>
        </div>
    );
}

export default Home;
