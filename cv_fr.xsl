<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output method="html" encoding="UTF-8" indent="yes"/>

    <xsl:template match="/">
        <html>
        <head>
            <title>CV de Massyl CHAKER</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    margin: 20px;
                }
                h1, h2 {
                    color: #2E4053;
                }
                section {
                    margin-bottom: 20px;
                }
                .personal-info, .education, .experience, .languages, .interests, .skills {
                    border-bottom: 1px solid #2E4053;
                    padding-bottom: 10px;
                }
                .job, .school, .language, .interest, .skill {
                    margin-left: 20px;
                }
            </style>
        </head>
        <body>
        <h1>CV de Massyl CHAKER</h1>
        <section class="personal-info">
            <h2>Informations Personnelles</h2>
            <p><strong>Nom :</strong> <xsl:value-of select="cv/personal-info/name"/></p>
            <p><strong>Adresse :</strong> <xsl:value-of select="cv/personal-info/address"/></p>
            <p><strong>Email :</strong> <xsl:value-of select="cv/personal-info/email"/></p>
            <p><strong>Téléphone :</strong> <xsl:value-of select="cv/personal-info/phone"/></p>
        </section>
        <section class="education">
            <h2>Éducation</h2>
            <xsl:for-each select="cv/education/school">
                <div class="school">
                    <p><strong>École :</strong> <xsl:value-of select="name"/></p>
                    <p><strong>Diplôme :</strong> <xsl:value-of select="degree"/></p>
                    <p><strong>Année :</strong> <xsl:value-of select="year"/></p>
                </div>
            </xsl:for-each>
        </section>
        <section class="experience">
            <h2>Expérience Professionnelle</h2>
            <xsl:for-each select="cv/experience/job">
                <div class="job">
                    <p><strong>Titre :</strong> <xsl:value-of select="title"/></p>
                    <p><strong>Entreprise :</strong> <xsl:value-of select="company"/></p>
                    <p><strong>Années :</strong> <xsl:value-of select="years"/></p>
                    <p><strong>Lieu :</strong> <xsl:value-of select="location"/></p>
                    <xsl:if test="contract">
                        <p><strong>Contrat :</strong> <xsl:value-of select="contract"/></p>
                    </xsl:if>
                </div>
            </xsl:for-each>
        </section>
        <section class="languages">
            <h2>Langues</h2>
            <xsl:for-each select="cv/languages/language">
                <div class="language">
                    <p><strong>Langue :</strong> <xsl:value-of select="name"/></p>
                    <p><strong>Niveau :</strong> <xsl:value-of select="proficiency"/></p>
                    <xsl:if test="notes">
                        <p><strong>Notes :</strong> <xsl:value-of select="notes"/></p>
                    </xsl:if>
                </div>
            </xsl:for-each>
        </section>
        <section class="interests">
            <h2>Centre d'Intérêts</h2>
            <xsl:for-each select="cv/interests/interest">
                <div class="interest">
                    <p><xsl:value-of select="."/></p>
                </div>
            </xsl:for-each>
        </section>
        <section class="skills">
            <h2>Compétences</h2>
            <h3>Compétences Non Techniques</h3>
            <xsl:for-each select="cv/skills/soft-skills/skill">
                <div class="skill">
                    <p><xsl:value-of select="."/></p>
                </div>
            </xsl:for-each>
            <h3>Compétences Techniques</h3>
            <xsl:for-each select="cv/skills/technical-skills/skill">
                <div class="skill">
                    <p><xsl:value-of select="."/></p>
                </div>
            </xsl:for-each>
        </section>
        </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
