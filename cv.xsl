<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <div>
            <h2>Informations personnelles</h2>
            <ul>
                <li><strong>Nom:</strong> <xsl:value-of select="curriculum_vitae/personal_info/name"/></li>
                <li><strong>Adresse:</strong> <xsl:value-of select="curriculum_vitae/personal_info/address"/></li>
                <li><strong>Email:</strong> <xsl:value-of select="curriculum_vitae/personal_info/email"/></li>
                <li><strong>Téléphone:</strong> <xsl:value-of select="curriculum_vitae/personal_info/phone"/></li>
            </ul>
            <h2>Éducation</h2>
            <ul>
                <li><strong>Diplôme:</strong> <xsl:value-of select="curriculum_vitae/education/degree"/></li>
                <li><strong>Établissement:</strong> <xsl:value-of select="curriculum_vitae/education/institution"/></li>
                <li><strong>Année:</strong> <xsl:value-of select="curriculum_vitae/education/year"/></li>
            </ul>
            <h2>Expérience professionnelle</h2>
            <xsl:for-each select="curriculum_vitae/experience/job">
                <ul>
                    <li><strong>Titre:</strong> <xsl:value-of select="title"/></li>
                    <li><strong>Entreprise:</strong> <xsl:value-of select="company"/></li>
                    <li><strong>Années:</strong> <xsl:value-of select="years"/></li>
                    <li><strong>Description:</strong> <xsl:value-of select="description"/></li>
                </ul>
            </xsl:for-each>
            <h2>Compétences</h2>
            <ul>
                <xsl:for-each select="curriculum_vitae/skills/skill">
                    <li><xsl:value-of select="."/></li>
                </xsl:for-each>
            </ul>
        </div>
    </xsl:template>
</xsl:stylesheet>
