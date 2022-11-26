import classes from "./styles.module.scss";

// Components
import Container from "../../components/Container";
import { useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Checkbox from "../../components/Checkbox";

const {
    block,
    block__container,
    block__header,
    block__headerButton,
    block__headerIndicator,
    block__tabsWrapper,
    block__tab,
    
    content__infoText,
    content__infoLink,
    content__form,
    content__formInput,
    content__formButton,
    content__formCheckbox,
    content__formCheckboxInput,
    content__formCheckboxText
} = classes;

const {
    data
} = window.initState ? window.initState : {
    data: "text"
};

export default function LoginSignupPage (props) {

    const path = window.location.pathname;

    const [currentTab, setCurrentTab] = useState(
        path === "/sign-up" || path === "/sign-up/" ? 1 : 0
    );

    return (
        <div className={block}>
            <Container className={block__container}>
                <div className={block__header}>
                    <button
                        type="button"
                        className={block__headerButton}
                        onClick={()=>setCurrentTab(0)}
                    >Sign in</button>
                    <button
                        type="button"
                        className={block__headerButton}
                        onClick={()=>setCurrentTab(1)}
                    >Sign up</button>
                    <div
                        className={block__headerIndicator}
                        style={{
                            transform: "translateX("+(currentTab * 100)+"%)"
                        }}
                    />
                </div>
                <div className={block__tabsWrapper}>
                    <div
                        className={block__tab}
                        style={{
                            transform: "translateX(-"+(currentTab * 100)+"%)",
                            maxHeight: currentTab !== 0 ? "0px" : null
                        }}
                    >
                        <p className={content__infoText}>
                            Make sure you are using the&nbsp;correct URL:
                        </p>
                        <p className={content__infoLink}>
                            <a href="/">art-pad.io</a>
                        </p>
                        <form className={content__form} action="/profile">

                            <Input
                                type="text"
                                name="login"
                                placeholder="Login"
                                required="required"
                                className={content__formInput}
                            />
                            
                            <Input
                                type="password"
                                name="password"
                                placeholder="Password"
                                required="required"
                                className={content__formInput}
                            />

                            <Button
                                type="submit"
                                variant="solid"
                                className={content__formButton}
                            >Sign in</Button>
                        </form>
                    </div>
                    <div
                        className={block__tab}
                        style={{
                            transform: "translateX(-"+(currentTab * 100)+"%)",
                            maxHeight: currentTab !== 1 ? "0px" : null
                        }}
                    >
                        <form className={content__form} action="/profile">

                            <Input
                                type="text"
                                name="login"
                                placeholder="Login"
                                required="required"
                                className={content__formInput}
                            />
                            
                            <Input
                                type="email"
                                name="email"
                                placeholder="E-mail"
                                required="required"
                                className={content__formInput}
                            />
                            
                            <Input
                                type="password"
                                name="password"
                                placeholder="Password"
                                required="required"
                                className={content__formInput}
                            />
                            
                            <Input
                                type="password"
                                name="confirm_password"
                                placeholder="Confirm Password"
                                required="required"
                                className={content__formInput}
                            />

                            <Button
                                type="submit"
                                variant="solid"
                                className={content__formButton}
                            >Sign up</Button>

                            <label className={content__formCheckbox}>
                                <Checkbox
                                    name="user-rules"
                                    className={content__formCheckboxInput}
                                />
                                <span className={content__formCheckboxText}>
                                    I agree with the <a href="/privacy-policy">privacy policy</a> and <a href="/user-agreement">user agreement</a>
                                </span>
                            </label>
                        </form>
                    </div>
                </div>
            </Container>
        </div>
    );
}