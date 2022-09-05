import React from 'react'
import clsx from 'clsx'
import Link from '@docusaurus/Link'
import styles from './highlight.module.css'
import Translate, {translate} from '@docusaurus/Translate';

export default function Highlight({ reversed, title, img, text, link,url,isDark }) {
    const content = (
        <div className={clsx('col col--4', styles.featureContent, reversed ? styles.featureContentReversed : '')}>
            <div className={styles.introimg}>{img}</div>
            <h3 className={styles.highlighttitle}>{title}</h3>
            <p className={styles.highlightsubtitle}>{text}</p>
        </div>
    )

    return (
        <section className={clsx('featureAndEco', isDark ? styles.darkSection + ' darkSection' : styles.featureAndEco)}>
            <h2 className={styles.sectionTitle}>{translate({message: "核心特性"})}</h2>
            <div className={clsx('row', styles.row)}>
                <div className={clsx('col col--4', styles.featureContent)}>
                    <div className={styles.introimg}>
                        <svg t="1662019940104" class="icon" viewBox="0 0 1323 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="694" width="100" height="100"><path d="M295.885162 290.240781a163.251644 163.251644 0 0 0-37.529113 54.417215 165.753584 165.753584 0 0 0-13.13519 62.548522 160.749703 160.749703 0 0 0 0 18.764557l5.003882 36.278143-28.77232 17.513586a237.0589 237.0589 0 0 0-62.548523 53.79173 225.800166 225.800166 0 0 0-53.166244 147.614513A229.553077 229.553077 0 0 0 125.127696 773.115375a233.931474 233.931474 0 0 0 53.166244 76.309197 237.0589 237.0589 0 0 0 170.757466 69.42886H938.258488a283.344807 283.344807 0 0 0 105.707003-20.015527 278.340925 278.340925 0 0 0 89.444387-59.421097 270.209617 270.209617 0 0 0 62.548522-87.567931 264.58025 264.58025 0 0 0 20.641013-103.830547 259.576368 259.576368 0 0 0-42.532996-143.861602L1170.938991 500.403817a273.337043 273.337043 0 0 0-71.305315-71.930801l-21.266498-14.38616v-25.644894a288.974174 288.974174 0 0 0-22.517468-93.822784 304.611304 304.611304 0 0 0-68.803375-98.826666A312.742612 312.742612 0 0 0 885.092244 125.112682a316.495524 316.495524 0 0 0-119.467678-22.517468 307.73873 307.73873 0 0 0-174.510378 51.915274 312.742612 312.742612 0 0 0-75.058227 73.181771l-21.266497 27.52135-33.776202-8.756793a181.390715 181.390715 0 0 0-44.409451-5.003882 175.135863 175.135863 0 0 0-62.548523 12.509704 173.259407 173.259407 0 0 0-58.170126 36.278143zM938.258488 1023.93495H347.800436A352.773667 352.773667 0 0 1 215.197568 1000.791996a347.1443 347.1443 0 0 1-111.961855-73.807256A332.132654 332.132654 0 0 1 0.030651 681.794532a329.005228 329.005228 0 0 1 77.560168-215.166917 347.769785 347.769785 0 0 1 62.548522-59.421097 267.707676 267.707676 0 0 1 21.266498-103.205062 270.835102 270.835102 0 0 1 62.548523-88.818902 275.213499 275.213499 0 0 1 193.274934-79.436623 303.360334 303.360334 0 0 1 36.903628 0 425.329953 425.329953 0 0 1 78.811138-65.675949A411.569278 411.569278 0 0 1 766.250051 0.015637a420.326071 420.326071 0 0 1 158.873247 30.023291 414.696704 414.696704 0 0 1 135.104809 88.818902A410.318307 410.318307 0 0 1 1152.174435 250.209727a389.677295 389.677295 0 0 1 28.146835 103.205062 379.669531 379.669531 0 0 1 81.313079 88.193417l10.633249 16.262615a363.406915 363.406915 0 0 1 51.289788 187.645568 370.287253 370.287253 0 0 1-28.77232 145.112572 375.291135 375.291135 0 0 1-84.440506 121.969619 384.673413 384.673413 0 0 1-125.097044 81.313079 389.05181 389.05181 0 0 1-146.989028 30.023291z" fill="#1E165C" p-id="695"></path></svg>
                    </div>
                    <h3 className={styles.highlighttitle}>{translate({ message: "云原生" })}</h3>
                    <p className={styles.highlightsubtitle}>{translate({ message: "生与云，长与云，无限弹性扩缩，K8s 友好" })}</p>
                </div>
                <div className={clsx('col col--4', styles.featureContent)}>
                    <div className={styles.introimg}>
                        <svg t="1662019998302" class="icon" viewBox="0 0 1088 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1092" width="100" height="100"><path d="M554.026667 0c294.570667 0 533.333333 238.784 533.333333 533.333333 0 219.52-132.586667 408.042667-322.069333 489.856l-65.92-65.941333c41.706667-14.293333 80.64-34.581333 115.776-59.818667l-59.2-59.178666 60.330666-60.352 63.253334 63.274666A446.4 446.4 0 0 0 1000.021333 576h-104.64v-85.333333h104.661334a445.461333 445.461333 0 0 0-77.184-211.712l-63.914667 63.893333-60.330667-60.330667 69.056-69.077333a446.528 446.528 0 0 0-270.933333-126.08L596.693333 170.666667h-85.333333V87.338667a446.528 446.528 0 0 0-270.976 126.08l69.056 69.098666-60.330667 60.330667-63.914666-63.893333A445.461333 445.461333 0 0 0 108.053333 490.666667H212.693333v85.333333H108.053333a446.4 446.4 0 0 0 120.490667 265.173333l63.253333-63.274666 60.330667 60.352-59.178667 59.178666a446.634667 446.634667 0 0 0 115.776 59.818667l-65.941333 65.941333C153.301333 941.376 20.693333 752.832 20.693333 533.333333c0-294.549333 238.762667-533.333333 533.333334-533.333333z m212.266666 385.066667l-211.2 392.213333-180.992-181.013333 392.192-211.2z m-157.482666 157.504l-128.64 69.269333 59.370666 59.370667 69.269334-128.64z" p-id="1093" fill="#1E165C"></path></svg>
                    </div>
                    <h3 className={styles.highlighttitle}>{translate({ message: "高吞吐" })}</h3>
                    <p className={styles.highlightsubtitle}>{translate({ message: "万亿级吞吐保证，同时满足微服务与大数据场景" })}</p>
                </div>
                <div className={clsx('col col--4', styles.featureContent)}>
                    <div className={styles.introimg}>
                        <svg t="1662020021534" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1351" width="100" height="100"><path d="M395.765333 586.570667h-171.733333c-22.421333 0-37.888-22.442667-29.909333-43.381334L364.768 95.274667A32 32 0 0 1 394.666667 74.666667h287.957333c22.72 0 38.208 23.018667 29.632 44.064l-99.36 243.882666h187.050667c27.509333 0 42.186667 32.426667 24.042666 53.098667l-458.602666 522.56c-22.293333 25.408-63.626667 3.392-54.976-29.28l85.354666-322.421333zM416.714667 138.666667L270.453333 522.581333h166.869334a32 32 0 0 1 30.933333 40.181334l-61.130667 230.954666 322.176-367.114666H565.312c-22.72 0-38.208-23.018667-29.632-44.064l99.36-243.882667H416.714667z" p-id="1352" fill="#1E165C"></path></svg>
                    </div>
                    <h3 className={styles.highlighttitle}>{translate({ message: "低时延" })}</h3>
                    <p className={styles.highlightsubtitle}>{translate({ message: "高负载下依然保持较低时延" })}</p>
                </div>
            </div>
            <div className={clsx('row', styles.row)}>
                <div className={clsx('col col--4', styles.featureContent)}>
                    <div className={styles.introimg}>
                        <svg t="1662020040095" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1602" width="100" height="100"><path d="M512 981.333333c-36.266667 0-70.4-12.8-96-38.4l-38.4-36.266666c-12.8-12.8-29.866667-21.333333-49.066667-21.333334l-53.333333-2.133333c-74.666667-2.133333-132.266667-61.866667-134.4-134.4l-2.133333-53.333333c0-19.2-8.533333-36.266667-21.333334-49.066667l-36.266666-38.4a136.533333 136.533333 0 0 1 0-189.866667l36.266666-38.4c12.8-12.8 21.333333-29.866667 21.333334-49.066666l2.133333-53.333334c2.133333-74.666667 61.866667-132.266667 134.4-134.4l53.333333-2.133333c19.2 0 36.266667-8.533333 49.066667-21.333333l38.4-36.266667a136.533333 136.533333 0 0 1 189.866667 0l38.4 36.266667c12.8 12.8 29.866667 21.333333 49.066666 21.333333l53.333334 2.133333c74.666667 2.133333 132.266667 61.866667 134.4 134.4l2.133333 53.333334c0 19.2 8.533333 36.266667 21.333333 49.066666l36.266667 38.4a136.533333 136.533333 0 0 1 0 189.866667l-38.4 38.4c-12.8 12.8-21.333333 29.866667-21.333333 49.066667l-2.133334 53.333333c-2.133333 74.666667-61.866667 132.266667-134.4 134.4l-53.333333 2.133333c-19.2 0-36.266667 8.533333-49.066667 21.333334l-38.4 36.266666C580.266667 968.533333 546.133333 981.333333 512 981.333333z m0-874.666666c-19.2 0-38.4 8.533333-51.2 21.333333l-38.4 36.266667c-25.6 23.466667-57.6 36.266667-91.733333 38.4H277.333333c-40.533333 0-72.533333 34.133333-74.666666 74.666666l-2.133334 53.333334c0 34.133333-14.933333 66.133333-38.4 91.733333L128 460.8c-27.733333 29.866667-27.733333 74.666667 0 102.4l36.266667 38.4c23.466667 25.6 36.266667 57.6 38.4 91.733333l2.133333 53.333334c2.133333 40.533333 34.133333 72.533333 74.666667 72.533333l53.333333 2.133333c34.133333 0 66.133333 14.933333 91.733333 38.4l38.4 36.266667c29.866667 27.733333 74.666667 27.733333 102.4 0l38.4-36.266667c25.6-23.466667 57.6-36.266667 91.733334-38.4l53.333333-2.133333c40.533333-2.133333 72.533333-32 72.533333-72.533333l2.133334-53.333334c0-34.133333 14.933333-66.133333 38.4-91.733333l36.266666-38.4c27.733333-29.866667 27.733333-74.666667 0-102.4l-36.266666-38.4c-23.466667-25.6-36.266667-57.6-38.4-91.733333l-2.133334-53.333334c-2.133333-40.533333-32-72.533333-72.533333-72.533333l-53.333333-2.133333c-34.133333 0-66.133333-14.933333-91.733334-38.4L563.2 128c-12.8-12.8-32-21.333333-51.2-21.333333z" p-id="1603" fill="#1E165C"></path><path d="M469.333333 646.4c-14.933333 0-27.733333-6.4-38.4-14.933333L320 518.4c-12.8-12.8-12.8-32-2.133333-44.8 12.8-12.8 32-12.8 44.8-2.133333 0 0 2.133333 0 2.133333 2.133333l104.533333 104.533333 192-189.866666c12.8-12.8 34.133333-10.666667 44.8 2.133333s10.666667 32 0 42.666667l-198.4 198.4c-10.666667 8.533333-23.466667 14.933333-38.4 14.933333z" p-id="1604" fill="#1E165C"></path></svg>
                    </div>
                    <h3 className={styles.highlighttitle}>{translate({ message: "金融级" })}</h3>
                    <p className={styles.highlightsubtitle}>{translate({ message: "支持金融级别的事务消息" })}</p>
                </div>
                <div className={clsx('col col--4', styles.featureContent)}>
                    <div className={styles.introimg}>
                        <svg t="1662020058130" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1830" width="100" height="100"><path d="M867.648 648.48l33.216 55.744a6.4 6.4 0 0 1-2.24 8.768l-398.912 237.76-398.944-237.76a6.4 6.4 0 0 1-2.24-8.768l33.216-55.744a6.4 6.4 0 0 1 8.8-2.24l359.136 214.048 359.2-214.016a6.4 6.4 0 0 1 8.768 2.24z m0-155.392l33.216 55.744a6.4 6.4 0 0 1-2.24 8.8l-398.912 237.76-398.944-237.76a6.4 6.4 0 0 1-2.24-8.8l33.216-55.744a6.4 6.4 0 0 1 8.8-2.24l359.136 214.08 359.2-214.08a6.4 6.4 0 0 1 8.768 2.24zM476.16 105.856c22.08-13.12 49.536-13.12 71.616 0l357.44 213.024a46.624 46.624 0 0 1 0 80.096l-357.44 212.992c-22.08 13.152-49.536 13.152-71.616 0l-357.44-212.992a46.624 46.624 0 0 1 0-80.096zM512 174.976l-308.64 183.936L512 542.848l308.64-183.936-308.64-183.936z" fill="#1E165C" p-id="1831"></path></svg>
                    </div>
                    <h3 className={styles.highlighttitle}>{translate({ message: "架构极简" })}</h3>
                    <p className={styles.highlightsubtitle}>{translate({ message: "零外部依赖，Shared-nothing 架构" })}</p>
                </div>
                <div className={clsx('col col--4', styles.featureContent)}>
                    <div className={styles.introimg}>
                        <svg t="1662020073561" class="icon" viewBox="0 0 1025 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2045" width="100" height="100"><path d="M960.13 661.73c45.18-217.23-72.82-435.39-279.35-516.48C668.79 62.35 597.7 0.84 513.93 0.9 430.17 0.85 359.09 62.35 347.11 145.25 172.89 213.66 58.28 381.73 58.23 568.91c0 23.86 3.21 54.82 9.53 92.77-39.81 30.79-65.38 78.96-65.38 133.1 0.02 44.67 17.8 87.5 49.4 119.07a168.43 168.43 0 0 0 119.13 49.27c29.77 0 57.76-7.68 81.95-21.16a454.28 454.28 0 0 0 261.08 82.03c93.38 0.16 184.54-28.51 261.03-82.08 24.28 13.49 52.23 21.25 81.99 21.25 44.67 0.03 87.52-17.7 119.13-49.27a168.394 168.394 0 0 0 49.4-119.08 167.91 167.91 0 0 0-65.36-133.08zM512.67 74c51.95 0 94.06 42.1 94.06 93.93 0.03 51.92-42.03 94.03-93.94 94.07-51.92 0.03-94.03-42.03-94.06-93.94-0.04-51.92 42.02-94.04 93.94-94.06zM171.59 884.57c-51.92 0.03-94.03-42.03-94.06-93.94-0.04-51.92 42.02-94.03 93.94-94.06 51.95 0 94.06 42.1 94.06 93.93 0.03 51.93-42.03 94.04-93.94 94.07z m536.95-9.94c-57.43 36.55-124.44 56.51-194.61 56.51a360.66 360.66 0 0 1-194.58-56.56 167.297 167.297 0 0 0 20.09-79.75c0-92.97-77.1-175.32-183.55-167.6 0 0-5.72-35.81-4.65-58.32 0.04-141.03 81.92-269.23 209.87-328.56 27.74 59.34 87.32 97.24 152.82 97.2 66.03 0 123.14-36.47 152.76-97.29 127.98 59.35 209.89 187.58 209.92 328.65 0 19.71-4.74 58.32-4.74 58.32-104.78-9.35-183.46 74.59-183.46 167.6a167.3 167.3 0 0 0 20.13 79.8z m144.05 9.94c-51.92 0.03-94.03-42.03-94.06-93.94-0.04-51.92 42.02-94.03 93.94-94.06 51.95 0 94.06 42.1 94.06 93.93 0.03 51.93-42.03 94.04-93.94 94.07z" p-id="2046" fill="#1E165C"></path></svg>
                    </div>
                    <h3 className={styles.highlighttitle}>{translate({ message: "生态友好" })}</h3>
                    <p className={styles.highlightsubtitle}>{translate({ message: "无缝对接微服务、实时计算、数据湖等周边生态" })}</p>
                </div>
            </div>
            <div className={clsx('sectionSpace', styles.sectionSpace)}></div>
            <h2 className={styles.sectionTitle}>{translate({message: "生态系统"})}</h2>
            <div className={clsx('row', styles.row)}>
                <div className={clsx('col col--4', styles.featureContent)}>
                    <div className={styles.introimg}>
                        <svg t="1662022118662" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3870" width="100" height="100"><path d="M879.674 544.51l-158.254-0.221c-8.534 2.287-17.305-2.776-19.588-11.307l-23.862-75.877-74.742 350.891c0 0-1.523 18.507-11.518 18.507s-26.9 0.281-26.9 0.281c-8.259 2.213-16.748-2.687-18.961-10.949l-92.741-457.648-70.305 330.634c-2.261 8.291-11.94 15.206-20.385 12.986l-24.876 0.339c-8.723 2.293-17.685-2.789-20.023-11.349L270.629 544.51 143.993 544.51c-8.831 0-15.993-7.159-15.993-15.993l0-31.986c0-8.831 7.162-15.993 15.993-15.993l157.429-0.516c9.565-0.304 17.685 0.788 20.023 9.351l24.386 76.092 68.642-358.907c0 0 3.4-10.894 14.397-10.894 10.994 0 34.107-0.448 34.107-0.448 8.262-2.213 16.751 2.687 18.965 10.949l91.912 454.126 67.948-326.182c2.213-8.262 8.707-15.161 16.965-12.948l27.316-0.333c8.531-2.287 17.301 2.776 19.588 11.31l46.665 148.4 127.337 0c8.835 0 15.993 7.162 15.993 15.993l0 31.986C895.667 537.352 888.508 544.51 879.674 544.51z" p-id="3871" fill="#1E165C"></path></svg>
                    </div>
                    <h3 className={styles.highlighttitle}>{translate({ message: "流处理" })}</h3>
                    <p className={styles.highlightsubtitle}>{translate({ message: "提供轻量、高扩展、高性能和丰富功能的流计算引擎" })}</p>
                </div>
                <div className={clsx('col col--4', styles.featureContent)}>
                    <div className={styles.introimg}>
                        <svg t="1662022200501" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5708" width="100" height="100"><path d="M768.097681 184.192165A55.873452 55.873452 0 1 1 823.971133 128.318713 55.873452 55.873452 0 0 1 768.097681 184.192165zM568.062194 896.04553A55.873452 55.873452 0 1 1 512.188742 840.172079 55.873452 55.873452 0 0 1 568.062194 896.04553zM200.406351 128.318713A55.873452 55.873452 0 1 1 256.279803 184.192165 55.873452 55.873452 0 0 1 200.406351 128.318713zM896.052151 128.318713a127.95447 127.95447 0 1 0-163.781721 122.836291v127.95447L512.188742 597.485102 291.680539 378.682959v-127.95447a127.95447 127.95447 0 1 0-72.081017 0v156.957483l255.908939 255.908939v108.334784a127.95447 127.95447 0 1 0 72.081018 0v-107.481754l255.908939-255.908939V251.155004A127.95447 127.95447 0 0 0 896.052151 128.318713z" fill="#1E165C" p-id="5709"></path></svg>
                    </div>
                    <h3 className={styles.highlighttitle}>{translate({ message: "连接器" })}</h3>
                    <p className={styles.highlightsubtitle}>{translate({ message: "配置化、低代码的方式进行数据集成，可与任意系统建立连接，可用于构建流式ETL，数据管道，数据湖等" })}</p>
                </div>
                <div className={clsx('col col--4', styles.featureContent)}>
                    <div className={styles.introimg}>
                        <svg t="1662022230456" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6048" width="100" height="100"><path d="M511.90226 722.428022c-9.330788 0-18.6343-3.719814-25.503397-11.079884-13.138113-14.080284-12.376648-36.145723 1.704773-49.283836l151.211045-141.104018c14.081421-13.141523 36.146859-12.376648 49.283836 1.704773 13.140386 14.079148 12.376648 36.144586-1.704772 49.282699L535.684972 713.051774a34.746673 34.746673 0 0 1-23.782712 9.376248z" p-id="6049" fill="#1E165C"></path><path d="M837.554717 722.428022a34.746673 34.746673 0 0 1-23.782713-9.376248L662.562095 571.947756c-14.081421-13.138113-14.844022-35.204688-1.704772-49.283836 13.140386-14.078011 35.204688-14.842886 49.284972-1.703636L861.353341 662.065438c14.080284 13.13925 14.842886 35.204688 1.703636 49.283836-6.866824 7.358935-16.172608 11.081021-25.503397 11.081021z" p-id="6050" fill="#1E165C"></path><path d="M673.212377 895.263538c-19.258246 0-34.870553-15.61117-34.870552-34.870552v-313.939534c0-19.258246 15.61117-34.870553 34.870552-34.870553s34.870553 15.61117 34.870553 34.870553v313.939534c-0.001137 19.259383-15.612306 34.870553-34.870553 34.870552zM872.327529 279.221274c-76.910242 0-139.482211-62.570832-139.48221-139.481074S795.417287 0.257989 872.327529 0.257989s139.481074 62.571969 139.481075 139.481074-62.570832 139.482211-139.481075 139.482211z m0-209.221043c-38.455121 0-69.741105 31.284848-69.741105 69.739969s31.285984 69.741105 69.741105 69.741105 69.739969-31.285984 69.739969-69.741105-31.284848-69.741105-69.739969-69.741106z" p-id="6051" fill="#1E165C"></path><path d="M767.715871 174.609616h-104.611658c-19.258246 0-34.870553-15.61117-34.870553-34.870553s15.61117-34.870553 34.870553-34.870552H767.715871c19.258246 0 34.870553 15.61117 34.870553 34.870552S786.974118 174.609616 767.715871 174.609616z" p-id="6052" fill="#1E165C"></path><path d="M360.89465 325.716102m-151.105349 0a151.10535 151.10535 0 1 0 302.210699 0 151.10535 151.10535 0 1 0-302.210699 0Z" fill="#1E165C" p-id="6053"></path><path d="M268.035694 479.819578a34.715987 34.715987 0 0 1-21.415352-7.372572c-45.566295-35.527458-71.700457-89.010717-71.700457-146.733177 0-102.54661 83.428155-185.974766 185.974765-185.974766 31.333718 0 62.328755 7.951059 89.634664 22.993971 16.868155 9.293283 23.008746 30.500653 13.715463 47.369945-9.293283 16.865882-30.497243 23.008746-47.369945 13.714326-17.024994-9.379658-36.382118-14.338273-55.980182-14.338273-64.092626 0-116.234797 52.143307-116.234797 116.234797 0 36.078668 16.343085 69.514939 44.842336 91.733807 15.18725 11.842486 17.900111 33.754495 6.057625 48.940608-6.873643 8.819356-17.145465 13.431334-27.522984 13.431334zM872.327529 399.710047c-19.258246 0-34.870553-15.61117-34.870552-34.870553V244.350721c0-19.258246 15.61117-34.870553 34.870552-34.870552s34.870553 15.61117 34.870553 34.870552v120.489909c0 19.258246-15.612306 34.869416-34.870553 34.869417z" p-id="6054" fill="#1E165C"></path><path d="M953.691774 1023.12261H70.309363c-32.046313 0-58.11683-26.070517-58.11683-58.117966V58.375956C12.192533 26.329643 38.26305 0.259125 70.309363 0.259125h534.679156c32.045176 0 58.11683 26.070517 58.116831 58.116831V372.208657h290.58756c32.045176 0 58.11683 26.070517 58.11683 58.11683v534.679157c-0.002273 32.046313-26.07279 58.117967-58.117966 58.117966zM81.932502 953.381505h860.134996V441.948626H628.23366c-19.258246 0-34.870553-15.61117-34.870552-34.870553V69.999094h-511.431743v883.382411z m871.759272-511.432879h0.011365-0.011365z" p-id="6055" fill="#1E165C"></path></svg>
                    </div>
                    <h3 className={styles.highlighttitle}>{translate({ message: "微服务" })}</h3>
                    <p className={styles.highlightsubtitle}>{translate({ message: "丰富的消息类型支持和消息治理方式，以消息粒度负载均衡满足 Serverless 应用场景" })}</p>
                </div>
            </div>
        </section>
    )
}
