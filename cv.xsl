<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
        <head>
            <title>Mon CV</title>
        </head>
        <body>
            <h1><xsl:value-of select="cv/personal-info/name"/></h1>
            <p>Email: <xsl:value-of select="cv/personal-info/email"/></p>
            <p>Téléphone: <xsl:value-of select="cv/personal-info/phone"/></p>
            <h2>Éducation</h2>
            <ul>
                <xsl:for-each select="cv/education/school">
                    <li>
                        <strong><xsl:value-of select="name"/></strong> - 
                        <xsl:value-of select="degree"/> 
                        (<xsl:value-of select="year"/>)
                    </li>
                </xsl:for-each>
            </ul>
            <h2>Expérience Professionnelle</h2>
            <ul>
                <xsl:for-each select="cv/experience/job">
                    <li>
                        <strong><xsl:value-of select="title"/></strong> chez 
                        <xsl:value-of select="company"/> 
                        (<xsl:value-of select="years"/>)
                    </li>
                </xsl:for-each>
            </ul>
        </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
