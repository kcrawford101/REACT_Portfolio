import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';



const Projects = () => (
  <Section nopadding id='projects'>
    
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map(({id, image, title, description, tags, source, visit}) => (
        <BlogCard key={id}>
          <Img src={image} />
          <TitleContent>
            <HeaderThree title>{title}</HeaderThree>
            
          </TitleContent> 
          <CardInfo>{description}</CardInfo>    
          <div>
            <TitleContent>Stack</TitleContent>
            <TagList>
              {tags.map((tag, i) =>(
                <Tag key={i}>{tag}</Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
            <ExternalLinks href={visit}>Repo</ExternalLinks>
            <ExternalLinks href={source}>View</ExternalLinks>
          </UtilityList>     
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;