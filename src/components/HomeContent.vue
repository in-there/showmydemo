<template>
    <div class="content">
        <div class="content-details">
            <div class="content-details-text">
                <h2>
                    Build UI components and pages in isolation
                </h2>
                <p>
                    Implement components and pages without needing to fuss with data, APIs, or business logic.
                </p>
            </div>
            <div class="content-details-img">
                <img src="../assets/content01.jpg" loading="lazy" alt="" srcset="">
            </div>
        </div>
        <div class="content-empty"></div>
    </div>
    <div class="content">
        <div class="content-details">
            <div class="content-details-text">
                <h2>
                    Build UI components and pages in isolation
                </h2>
                <p>
                    Implement components and pages without needing to fuss with data, APIs, or business logic.
                </p>
            </div>
            <div class="content-details-img">
                <img src="../assets/content02.jpg" loading="lazy" alt="" srcset="">
            </div>
        </div>
        <div class="content-empty"></div>
    </div>
    <div class="content">
        <div class="content-details">
            <div class="content-details-text">
                <h2>
                    Build UI components and pages in isolation
                </h2>
                <p>
                    Implement components and pages without needing to fuss with data, APIs, or business logic.
                </p>
            </div>
            <div class="content-details-img">
                <img src="../assets/content03.jpg" loading="lazy" alt="" srcset="">
            </div>
        </div>
        <div class="content-empty"></div>
    </div>
</template>
<style lang="scss"  scoped >
.content {
    &-details {
        display: flex;
        gap: 1rem;
        position: sticky;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        top: 20vh;
        box-sizing: border-box;
        padding: 2rem;
        &-img {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width:fit-content;
            img {
                width: 70vw;
                object-fit: cover;
                object-position: center;
            }
        }

        &-text {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            width: 100%;
            padding: 1rem;
            h2,
            p {
                margin: 0;
                padding: 0;
                color: #fff;
            }

            h2 {
                font-size: 1.1rem;
            }
        }
    }

    &-empty {
        display: block;
        height: 30vh;
    }
}

@media screen and (min-width: 430px) {
    .content {
        &-details {
            flex-direction: row;
            &-text {
                h2 {
                    font-size: 1.5rem;
                }
            }
            &-img{
                img{
                    width: 40vw;
                }
            }
        }
        &-empty {
        display: block;
        height: 70vh;
    }
    }

}</style>