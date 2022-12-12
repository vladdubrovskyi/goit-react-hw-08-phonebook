import {StyledSection} from "../Section/Section.styled"
import {StyledHeader} from "../Section/Header.styled"
import PropTypes from 'prop-types';
export const Section = ({ title, children }) => {
    return <StyledSection>
        <StyledHeader>{title}</StyledHeader>
        {children}
    </StyledSection>
    
}


Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node    
}